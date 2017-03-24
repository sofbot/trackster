json.story do
  json.id @story.id
  json.title @story.title
  json.internal_state @story.internal_state
  json.description @story.description
  json.ice_boxed @story.ice_boxed
  json.priority @story.priority
  json.project_id @story.project_id
  json.tasks @story.tasks do |task|
    json.id task.id
    json.body task.body
    json.complete task.complete
    json.story_id task.story_id
  end
end
