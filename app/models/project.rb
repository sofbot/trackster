class Project < ApplicationRecord
  validates :title, presence: true

  belongs_to :creator, foreign_key: :creator_id, class_name: :User
  has_many :stories, dependent: :destroy
  has_many :invites, dependent: :destroy
  has_many :members, through: :invites, source: :user
end
