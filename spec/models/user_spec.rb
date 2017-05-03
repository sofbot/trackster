require 'rails_helper'

describe User, type: :model do
  let(:user) { User.new('sofbot', 'password')}

  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }
  it { should validate_presence_of(:session_token) }
  it { should validate_uniqueness_of(:session_token) }

  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

end
