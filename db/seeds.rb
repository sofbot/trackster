# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


kate = User.create(username: 'kate', password: 'password')
sof = User.create(username: 'sofbot', password: 'password')
brooke = User.create(username: 'brooke', password: 'password')
eliza = User.create(username: 'eliza', password: 'password')
katie = User.create(username: 'katie', password: 'password')
aditi = User.create(username: 'aditi', password: 'password')
ryan = User.create(username: 'ryan', password: 'password')

trackster = Project.create(title: 'trackster', creator_id: sof.id)
airpnme = Project.create(title: 'airpnme', creator_id: ryan.id)
hipchat = Project.create(title: 'hipchat', creator_id: kate.id)
sixthave = Project.create(title: 'sixthave', creator_id: sof.id)
ggpark = Project.create(title: 'ggpark', creator_id: brooke.id)
sfmoma = Project.create(title: 'sfmoma', creator_id: katie.id)
stanford = Project.create(title: 'stanford science', creator_id: aditi.id)

invite1 = Invite.create(user_id: kate.id, project_id: trackster.id)
invite2 = Invite.create(user_id: sof.id, project_id: ggpark.id)
invite3 = Invite.create(user_id: katie.id, project_id: sixthave.id)
invite4 = Invite.create(user_id: sof.id, project_id: airpnme.id)
invite5 = Invite.create(user_id: ryan.id, project_id: trackster.id)
invite6 = Invite.create(user_id: eliza.id, project_id: stanford.id)
