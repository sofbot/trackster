# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


kate = User.create!(username: 'kate', password: 'password')
sof = User.create!(username: 'sofbot', password: 'password')
brooke = User.create!(username: 'brooke', password: 'password')
eliza = User.create!(username: 'eliza', password: 'password')
katie = User.create!(username: 'katie', password: 'password')
aditi = User.create!(username: 'aditi', password: 'password')
vinson = User.create!(username: 'vinson', password: 'password')
fern = User.create!(username: 'fern', password: 'password')
debra = User.create!(username: 'debra', password: 'password')
brandon = User.create!(username: 'brandon', password: 'password')
josel = User.create!(username: 'josel', password: 'password')
keith = User.create!(username: 'keith', password: 'password')
lemmon = User.create!(username: 'lemmon', password: 'password')
matt = User.create!(username: 'matt', password: 'password')
rob = User.create!(username: 'rob', password: 'password')
russ = User.create!(username: 'russ', password: 'password')
ryan = User.create!(username: 'ryan', password: 'password')

trackster = Project.create!(title: 'trackster', creator_id: sof.id)
airpnme = Project.create!(title: 'airpnme', creator_id: ryan.id)
hipchat = Project.create!(title: 'hipchat', creator_id: kate.id)
sixthave = Project.create!(title: 'sixthave', creator_id: sof.id)
ggpark = Project.create!(title: 'ggpark', creator_id: brooke.id)
sfmoma = Project.create!(title: 'sfmoma', creator_id: katie.id)
stanford = Project.create!(title: 'stanford science', creator_id: aditi.id)
pivotaltracker = Project.create!(title: 'pivotal tracker', creator_id: sof.id)
kamcord = Project.create!(title: 'kamcord', creator_id: matt.id)
gnarbox = Project.create!(title: 'gnarbox', creator_id: lemmon.id)
rainforest = Project.create!(title: 'rainforest', creator_id: russ.id)
aa = Project.create!(title: 'app academy', creator_id: debra.id)
apple = Project.create!(title: 'apple', creator_id: josel.id)

Invite.create!(user_id: kate.id, project_id: trackster.id)
Invite.create!(user_id: sof.id, project_id: ggpark.id)
Invite.create!(user_id: katie.id, project_id: sixthave.id)
Invite.create!(user_id: sof.id, project_id: airpnme.id)
Invite.create!(user_id: ryan.id, project_id: trackster.id)
Invite.create!(user_id: sof.id, project_id: apple.id)
Invite.create!(user_id: eliza.id, project_id: stanford.id)
Invite.create!(user_id: sof.id, project_id: stanford.id)
Invite.create!(user_id: sof.id, project_id: aa.id)
Invite.create!(user_id: debra.id, project_id: aa.id)
Invite.create!(user_id: vinson.id, project_id: aa.id)
Invite.create!(user_id: fern.id, project_id: aa.id)
Invite.create!(user_id: ryan.id, project_id: aa.id)
Invite.create!(user_id: brandon.id, project_id: aa.id)

Story.create!(title: 'complete projects#show page', internal_state: 'unstarted',
story_type: 'feature', ice_boxed: false, project_id: trackster.id)
