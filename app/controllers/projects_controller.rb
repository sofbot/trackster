class ProjectsController < ApplicationController
  def index
    projects = current_user.projects
    team_projects = current_user.team_projects
    @projects = projects + team_projects
    render 'projects/index'
  end

  def show
    @project = Project.find(params[:id])
    @members = @project.members.map(&:username)
    render 'projects/show'
  end

  def create
    @project = Project.new(project_params)
    @project.creator_id = current_user.id
    if @project.save
      if params["project"]["memberIds"]
        @project.member_ids = (params["project"]["memberIds"].map(&:to_i)).uniq
      end
      render 'projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      if params["project"]["memberIds"]
        @project.member_ids = (@project.member_ids + (params["project"]["memberIds"]).map(&:to_i)).uniq
      end
      render 'projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    render json: project
  end

  private

  def project_params
    params.require(:project).permit(:title)
  end
end
