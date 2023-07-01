class User < ApplicationRecord
  validates :email, presence: true, uniqueness: { case_sensitive: false }

  passwordless_with :email
  has_many :rentals
  validates :age, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
