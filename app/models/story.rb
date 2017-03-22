class Story < ApplicationRecord
  validates :title, :internal_state, :story_type, :priority,
            :project_id, :user_id, presence: true
  validates_inclusion_of :ice_boxed, in: [true, false]

  belongs_to :project
  belongs_to :user
  has_many :tasks
end
