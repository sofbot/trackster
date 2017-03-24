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

gnarbox = Project.create!(title: 'gnarbox', creator_id: lemmon.id)

Project.create!([
  {title: "airpnme", creator_id: 17},
  {title: "hipchat", creator_id: 1},
  {title: "ggpark", creator_id: 3},
  {title: "sfmoma", creator_id: 5}, #id 5
  {title: "stanford science", creator_id: 6},
  {title: "kamcord", creator_id: 14}, # id 7
  {title: "gnarbox", creator_id: 13},
  {title: "rainforest", creator_id: 16}, # id 9
  {title: "app academy", creator_id: 9},
  {title: "apple", creator_id: 11},
  {title: "funtimez", creator_id: 2}, #id 12
  {title: "tangent", creator_id: 2}, #id 13
  {title: "meow global networks", creator_id: 2}, #id 14
])
Invite.create!(user_id: sof.id, project_id: gnarbox.id)
Invite.create!([
  {user_id: 4, project_id: 7},
  {user_id: 13, project_id: 9},
  {user_id: 9, project_id: 12},
  {user_id: 7, project_id: 12},
  {user_id: 8, project_id: 12},
  {user_id: 17, project_id: 12},
  {user_id: 10, project_id: 12},
  {user_id: 1, project_id: 12},
  {user_id: 13, project_id: 12},
  {user_id: 1, project_id: 13},
  {user_id: 13, project_id: 13},
  {user_id: 6, project_id: 13},
  {user_id: 4, project_id: 13},
  {user_id: 14, project_id: 7},
  {user_id: 15, project_id: 14},
  {user_id: 16, project_id: 9},
  {user_id: 2, project_id: 5}
  ])
  Story.create!(title: 'create crud ui for stories', internal_state: 'unstarted', story_type: 'feature', ice_boxed: false, priority: 2, project_id: 1, user_id: 2)
Story.create!([
  {title: "add video to homepage", internal_state: "unstarted", story_type: "feature", description: "ensure quick load and continuous playback", ice_boxed: true, priority: 7, project_id: 14, user_id: 2},
  {title: "create user profile flow", internal_state: "unstarted", story_type: "feature", description: "users have profiles with photo, name, age, description. can view all other user profiles", ice_boxed: true, priority: 9, project_id: 14, user_id: 2},
  {title: "create user feed", internal_state: "unstarted", story_type: "feature", description: "show all user profile previews", ice_boxed: true, priority: 10, project_id: 14, user_id: 2},
  {title: "sign up flow for QA engineers", internal_state: "start", story_type: "feature", description: "", ice_boxed: false, priority: 7, project_id: 9, user_id: 2},
  {title: "admin dashboard leaderboard", internal_state: "done", story_type: "feature", description: "show top earners on the admin dashboard home view", ice_boxed: false, priority: 5, project_id: 9, user_id: 2},
  {title: "admin dashboard analytics", internal_state: "finish", story_type: "feature", description: "show weekly and monthly performance stats", ice_boxed: false, priority: -4, project_id: 9, user_id: 2},
  {title: "login form for admin users", internal_state: "done", story_type: "feature", description: "", ice_boxed: false, priority: -7, project_id: 9, user_id: 2},
  {title: "login form for QA engineers", internal_state: "done", story_type: "feature", description: "", ice_boxed: false, priority: -12, project_id: 9, user_id: 2},
  {title: "upgrade from old ruby version", internal_state: "deliver", story_type: "Chore", description: "be careful", ice_boxed: false, priority: 20, project_id: 9, user_id: 2},
  {title: "write tests for admin dashboard ", internal_state: "unstarted", story_type: "feature", description: "", ice_boxed: true, priority: 22, project_id: 9, user_id: 2},
  {title: "custom CRM ", internal_state: "unstarted", story_type: "feature", description: "see mockups ", ice_boxed: true, priority: 21, project_id: 9, user_id: 2},
  {title: "front end auth ", internal_state: "start", story_type: "Release", description: "create signup / signin flow on the front end ", ice_boxed: false, priority: 2, project_id: 14, user_id: 2},
  {title: "design mockups", internal_state: "done", story_type: "Chore", description: "beautify ", ice_boxed: false, priority: -5, project_id: 14, user_id: 2},
  {title: "generate user stories", internal_state: "done", story_type: "feature", description: "be detailed please", ice_boxed: false, priority: -10, project_id: 14, user_id: 2},
  {title: "create wireframes", internal_state: "done", story_type: "Chore", description: "essential plans ", ice_boxed: false, priority: -15, project_id: 14, user_id: 2},
  {title: "plan out application state", internal_state: "done", story_type: "Chore", description: "create docs including sample state", ice_boxed: false, priority: -16, project_id: 14, user_id: 2},
  {title: "style splash page", internal_state: "start", story_type: "feature", description: "use a lot of cats", ice_boxed: false, priority: 6, project_id: 14, user_id: 2},
  {title: "back end auth ", internal_state: "start", story_type: "Release", description: "rails backend ", ice_boxed: false, priority: 4, project_id: 14, user_id: 2},
  {title: "integrate Stripe payments", internal_state: "unstarted", story_type: "feature", description: "open to other suggestions for payment processors", ice_boxed: true, priority: 8, project_id: 14, user_id: 2},
  {title: "style error log index", internal_state: "unstarted", story_type: "feature", description: "errors in red, solutions in green", ice_boxed: true, priority: 34, project_id: 13, user_id: 2},
  {title: "fix splash page margins", internal_state: "unstarted", story_type: "Bug", description: "header is larger than the rest of the page", ice_boxed: true, priority: 18, project_id: 9, user_id: 2},
  {title: "add autocomplete to error log search", internal_state: "unstarted", story_type: "feature", description: "", ice_boxed: true, priority: 36, project_id: 13, user_id: 2},
  {title: "add screencast comment view", internal_state: "unstarted", story_type: "feature", description: "encourage users to add comments to their logs", ice_boxed: true, priority: 37, project_id: 13, user_id: 2},
  {title: "add screencast edit functionality", internal_state: "unstarted", story_type: "feature", description: "allow users to trim screencast length", ice_boxed: true, priority: 38, project_id: 13, user_id: 2},
  {title: "add animations to screencast", internal_state: "unstarted", story_type: "feature", description: "incorporate filters to screencast views", ice_boxed: true, priority: 39, project_id: 13, user_id: 2},
  {title: "share mode", internal_state: "unstarted", story_type: "feature", description: "allow users to automatically share solution entries in a blog format ", ice_boxed: true, priority: 40, project_id: 13, user_id: 2},
  {title: "add reasons to be cheerful", internal_state: "done", story_type: "feature", description: "user should be able to generate a list of things they're grateful for. Save in localstorage", ice_boxed: false, priority: 24, project_id: 12, user_id: 2},
  {title: "replace favicon image ", internal_state: "unstarted", story_type: "feature", description: "use a tiny awkward moment seal face", ice_boxed: true, priority: 29, project_id: 12, user_id: 2},
  {title: "add random texts of kindness", internal_state: "start", story_type: "feature", description: "user should be able to send a nice text to a random number on click", ice_boxed: false, priority: 22, project_id: 12, user_id: 2},
  {title: "get new API key for NYT ", internal_state: "finish", story_type: "Chore", description: "maximum calls exceeded", ice_boxed: false, priority: 18, project_id: 12, user_id: 2},
  {title: "update google chrome store description", internal_state: "done", story_type: "feature", description: "upload new screenshots", ice_boxed: false, priority: 30, project_id: 12, user_id: 2},
  {title: "submit update to google chrome store", internal_state: "unstarted", story_type: "feature", description: "message users about available update", ice_boxed: true, priority: 31, project_id: 12, user_id: 2},
  {title: "improve load performance", internal_state: "unstarted", story_type: "feature", description: "use cloudinary to host images", ice_boxed: true, priority: 26, project_id: 12, user_id: 2},
  {title: "invite team ", internal_state: "unstarted", story_type: "feature", description: "allow users to invite team members and collaborate on logs", ice_boxed: true, priority: 41, project_id: 13, user_id: 2},
  {title: "write tests for autocomplete", internal_state: "unstarted", story_type: "feature", description: "", ice_boxed: true, priority: 42, project_id: 13, user_id: 2},
  {title: "make all entries searchable", internal_state: "unstarted", story_type: "feature", description: "", ice_boxed: true, priority: 43, project_id: 13, user_id: 2},
  {title: "style splashpage for rotating artist pages", internal_state: "unstarted", story_type: "feature", description: "", ice_boxed: true, priority: 48, project_id: 5, user_id: 2},
  {title: "add rotating background ", internal_state: "unstarted", story_type: "feature", description: "change background each time a new tab is opened", ice_boxed: true, priority: 24, project_id: 12, user_id: 2},
  {title: "scrape customer data", internal_state: "done", story_type: "feature", description: "use nokogiri gem or something similar. Data should appear on customer show page", ice_boxed: false, priority: 16, project_id: 9, user_id: 2},
  {title: "write media queries for mobile views ", internal_state: "done", story_type: "feature", description: "consult with designer to ensure key information is displayed", ice_boxed: false, priority: 14, project_id: 9, user_id: 2},
  {title: "on-boarding flow for customers", internal_state: "start", story_type: "feature", description: "toggle on-boarding on submit of customer sign up ", ice_boxed: false, priority: 8, project_id: 9, user_id: 2},
  {title: "re style left panel to replace NYT gap", internal_state: "unstarted", story_type: "feature", description: "put something else where the cat articles should be while we wait on the updated keys", ice_boxed: true, priority: 23, project_id: 12, user_id: 2},
  {title: "hook up custom mailer", internal_state: "unstarted", story_type: "feature", description: "constant contact, but custom", ice_boxed: true, priority: 28, project_id: 12, user_id: 2},
  {title: "trigger screencast on keystroke", internal_state: "deliver", story_type: "feature", description: "keystroke is cmd-i", ice_boxed: false, priority: 24, project_id: 13, user_id: 2},
  {title: "add security measures for CRUD actions", internal_state: "done", story_type: "feature", description: "user should only be able to update and delete their own logs", ice_boxed: false, priority: 45, project_id: 13, user_id: 2},
  {title: "allow users to pick their own keyboard shortcut", internal_state: "finish", story_type: "feature", description: "provide warnings if they already have that shortcut assigned to something else", ice_boxed: false, priority: 33, project_id: 13, user_id: 2},
  {title: "error feed view", internal_state: "done", story_type: "feature", description: "allow users to view and search system wide errors ", ice_boxed: false, priority: 44, project_id: 13, user_id: 2},
  {title: "add artist admin page", internal_state: "start", story_type: "feature", description: "", ice_boxed: false, priority: 45, project_id: 5, user_id: 2},
  {title: "create content manager for social media team", internal_state: "unstarted", story_type: "feature", description: "easy interface to quickly format and deliver content ", ice_boxed: true, priority: 51, project_id: 5, user_id: 2},
  {title: "analytics for customer view", internal_state: "unstarted", story_type: "feature", description: "track user engagement and display on admin dashboard", ice_boxed: true, priority: 52, project_id: 5, user_id: 2},
  {title: "filters for photobooth ", internal_state: "unstarted", story_type: "feature", description: "add filters for digital photobooth", ice_boxed: true, priority: 53, project_id: 5, user_id: 2},
  {title: "internal admin dashboard", internal_state: "done", story_type: "feature", description: "show visitor stats", ice_boxed: false, priority: 50, project_id: 5, user_id: 2},
  {title: "mailer for photobooth", internal_state: "done", story_type: "feature", description: "auto mail all photobooth images to users, immediately after taking", ice_boxed: false, priority: 54, project_id: 5, user_id: 2},
  {title: "VR experience for tech event", internal_state: "finish", story_type: "feature", description: "", ice_boxed: false, priority: 43, project_id: 5, user_id: 2},
  {title: "generate marketing material for grand re-opening", internal_state: "done", story_type: "feature", description: "", ice_boxed: false, priority: 35, project_id: 5, user_id: 2},
  {title: "community homepage ", internal_state: "done", story_type: "feature", description: "", ice_boxed: false, priority: 41, project_id: 7, user_id: 2},
  {title: "auto screenshot for iphone users", internal_state: "unstarted", story_type: "feature", description: "", ice_boxed: true, priority: 56, project_id: 7, user_id: 2},
  {title: "add new stickers ", internal_state: "done", story_type: "feature", description: "", ice_boxed: false, priority: 58, project_id: 7, user_id: 2},
  {title: "improve video filter load times", internal_state: "done", story_type: "feature", description: "", ice_boxed: false, priority: 46, project_id: 7, user_id: 2},
  {title: "brand ambassador dashboard", internal_state: "unstarted", story_type: "feature", description: "", ice_boxed: true, priority: 60, project_id: 7, user_id: 2},
  {title: "analytics for user engagement ", internal_state: "unstarted", story_type: "feature", description: "", ice_boxed: true, priority: 61, project_id: 7, user_id: 2},
  {title: "add invite manager", internal_state: "unstarted", story_type: "feature", description: "", ice_boxed: true, priority: 64, project_id: 7, user_id: 2},
  {title: "fix image resizing bug", internal_state: "done", story_type: "Bug", description: "", ice_boxed: false, priority: 51, project_id: 7, user_id: 2},
  {title: "add comments to snaps", internal_state: "finish", story_type: "feature", description: "", ice_boxed: false, priority: 35, project_id: 7, user_id: 2},
  {title: "auto generate weekly newsletter", internal_state: "done", story_type: "feature", description: "", ice_boxed: false, priority: 63, project_id: 7, user_id: 2}
])
Task.create!([
  {story_id: 15, complete: false, body: "for admin"},
  {story_id: 15, complete: false, body: "for guest"},
  {story_id: 13, complete: false, body: "add _ensureLoggedIn constraint to route"},
  {story_id: 13, complete: false, body: "add _redirectIfLoggedIn constraint to signup / signin form"},
  {story_id: 19, complete: false, body: "generate password_digest with BCrypt gem"},
  {story_id: 19, complete: false, body: "min password length: 6 chars"},
  {story_id: 13, complete: false, body: "redirect to user feed on login"},
  {story_id: 7, complete: false, body: "visually represent in graphical form"},
  {story_id: 7, complete: false, body: "missed quotas should be displayed in red"},
  {story_id: 22, complete: false, body: "flex everything"},
  {story_id: 41, complete: false, body: "add appropriate breakpoints"},
  {story_id: 42, complete: false, body: "display tooltips in order"},
  {story_id: 42, complete: false, body: "allow user to skip entire process"},
  {story_id: 30, complete: false, body: "integrate with Twillo "},
])
