json.project do
  json.id @project.id
  json.title @project.title
  json.creator_id @project.creator_id
  json.members @project.members.map(&:username)
  json.stories @project.stories
end
