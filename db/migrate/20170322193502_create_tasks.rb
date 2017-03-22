class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.integer :story_id, null: false
      t.boolean :complete, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :tasks, :story_id
  end
end
