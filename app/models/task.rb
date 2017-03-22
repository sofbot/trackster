class Task < ApplicationRecord
  validates :story_id, :body, presence: true
  validates_inclusion_of :complete, in: [true, false]
  belongs_to :story
end
