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
