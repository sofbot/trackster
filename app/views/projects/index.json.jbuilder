json.array!(@projects) do |project|
  json.id project.id
  json.title project.title
  json.creator_id project.creator_id
  json.member_ids project.member_ids
  json.members project.members.map(&:username)
  json.stories project.stories
end
