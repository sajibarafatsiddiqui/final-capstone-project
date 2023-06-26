class User < ApplicationRecord
  validates :first_name, presence: true, format: { with: /[a-zA-Z]/ }
  validates :last_name, presence: true, format: { with: /[a-zA-Z]/ }
  validates :gender, presence: true, format: { with: /[a-zA-Z]/ }
  validates :age, presence: true, numericality: { only_integer: true }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: {with: /[a-zA-Z]/}

  passwordless_with :email
    has_many :rentals
    validates :age, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
    
end
