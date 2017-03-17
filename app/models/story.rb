class Story < ApplicationRecord
  validates :title, :internal_state, :story_type, :ice_boxed,
            :priority, :project_id, :user_id, presence: true

  belongs_to :project
  belongs_to :user
end
