# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170322193502) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "invites", force: :cascade do |t|
    t.integer "user_id",    null: false
    t.integer "project_id", null: false
    t.index ["user_id", "project_id"], name: "index_invites_on_user_id_and_project_id", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "creator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_projects_on_creator_id", using: :btree
  end

  create_table "stories", force: :cascade do |t|
    t.string   "title",          null: false
    t.string   "internal_state", null: false
    t.string   "story_type",     null: false
    t.text     "description"
    t.boolean  "ice_boxed",      null: false
    t.integer  "priority",       null: false
    t.integer  "project_id",     null: false
    t.integer  "user_id",        null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["user_id", "project_id"], name: "index_stories_on_user_id_and_project_id", using: :btree
  end

  create_table "tasks", force: :cascade do |t|
    t.integer  "story_id",   null: false
    t.boolean  "complete",   null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["story_id"], name: "index_tasks_on_story_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
