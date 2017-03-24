class StoriesController < ApplicationController
  def index
    project = Project.find(params[:project_id])
    @stories = project.stories
    render 'stories/index'
  end

  def show
    @story = Story.find(params[:id])
    render 'stories/show'
  end

  def create
    @story = Story.new(story_params)
    @story.user_id = current_user.id
    @story.project_id = params[:project_id]
    @story.priority = (Story.maximum(:priority) ? (Story.maximum(:priority) + 1) : 1)

    if @story.save
      render 'stories/show'
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def update
    @story = Story.find(params[:id])

    # updating priority
    if params[:story][:priority]
      @story.priority = params[:story][:priority]

      if @story.internal_state === 'done'
        stories = Story.where(project_id: params[:story][:project_id],
                              internal_state: 'done')
                       .where.not(id: @story.id)
                       .order(:priority)
      else
        stories = Story.where(project_id: params[:story][:project_id],
                        ice_boxed: params[:story][:ice_boxed])
                       .where.not(id: @story.id)
                       .order(priority: :desc)
      end

        pivot = @story.priority
        left = stories.select{ |story| story.priority <= pivot }

        left.each do |story|
          story.priority -= 1
          story.save
        end
        # right = stories.select{ |story| story.priority >= pivot }
        #
        # right.each do |story|
        #   story.priority += 1
        #   story.save
        # end

    end

    if @story.update(story_params)
      render 'stories/show'
    else
      render json: ['fails']
    end
  end

  def destroy
    story = Story.find(params[:id])
    story.destroy
    render json: story
  end

  private

  def story_params
    params.require(:story).permit(:title, :internal_state, :story_type,
                                  :description, :ice_boxed, :priority)
  end
end
