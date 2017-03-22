json.story do
  json.id @story.id
  json.title @story.title
  json.internal_state @story.internal_state
  json.description @story.description
  json.ice_boxed @story.ice_boxed
  json.priority @story.priority
  json.tasks @story.tasks do |task|
    json.id task.id
    json.body task.body
    json.complete task.complete
  end
end
