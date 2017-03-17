class CreateInvites < ActiveRecord::Migration[5.0]
  def change
    create_table :invites do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
    end
    add_index :invites, [:user_id, :project_id]
  end
end
