class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description
      t.integer :creator_id
      t.timestamps
    end

    add_index :projects, :creator_id
  end
end
