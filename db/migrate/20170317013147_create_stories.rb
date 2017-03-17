class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.string :internal_state, null: false
      t.string :story_type, null: false
      t.text :description
      t.boolean :ice_boxed, null: false
      t.integer :priority, null: false
      t.integer :project_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :stories, [:user_id, :project_id]
  end
end
