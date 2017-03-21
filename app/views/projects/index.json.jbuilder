json.array!(@projects) do |project|
  json.id project.id
  json.title project.title
  json.creator_id project.creator_id
  json.member_ids project.member_ids
  json.stories project.stories
  json.members project.members do |member|
    json.id member.id
    json.username member.username
  end
end
