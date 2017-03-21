json.project do
  json.id @project.id
  json.title @project.title
  json.creator_id @project.creator_id
  json.stories @project.stories
  json.members @project.members do |member|
    json.id member.id
    json.username member.username
  end
end
