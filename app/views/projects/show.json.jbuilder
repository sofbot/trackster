json.project do
  json.id @project.id
  json.title @project.title
  json.creator_id @project.creator_id
  json.members @project.members do |member|
    json.id member.id
    json.username member.username
  end
  json.stories @project.stories do |story|
    json.id story.id
    json.title story.title
    json.internal_state story.internal_state
    json.description story.description
    json.ice_boxed story.ice_boxed
    json.priority story.priority
    json.project_id story.project_id
    json.tasks story.tasks do |task|
      json.id task.id
      json.body task.body
      json.complete task.complete
    end
  end
end
