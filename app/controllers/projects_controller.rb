class ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render 'projects/index'
  end

  def show

  end

  def create
    if !current_user
      render json: ["nope"]
    else
      @project = Project.new(project_params)
      @project.creator_id = current_user.id
      if @project.save!
        render 'projects/show'
      else
        render json: @project.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    render json: project
  end

  private
  def project_params
    params.require(:project).permit(:title, :description)
  end
end
