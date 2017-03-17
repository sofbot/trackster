class InvitesController < ApplicationController
  def create
    invite = Invite.new(invite_params)
    if invite.save
      @project = invite.project
      render 'projects/show'
    else
      render json: @invite.errors.full_messages, status: 422
    end
  end

  def destroy
    project = Project.find(params[:id])
    invite = Invite.find_by(user_id: current_user.id, project_id: project.id)
    invite.destroy
    render json: project
  end

  private

  def invite_params
    params.require(:invite).permit(:project_id, :user_id)
  end
end
