class TasksController < ApplicationController
  def index
    @tasks = Story.find(params[:story_id]).tasks
    render 'tasks/index'
  end

  def create
    @task = Task.new(task_params)
    @task.complete = false
    if @task.save
      render 'tasks/show'
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render 'tasks/show'
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    render json: task
  end

  private

  def task_params
    params.require(:task).permit(:story_id, :complete, :body)
  end
end
