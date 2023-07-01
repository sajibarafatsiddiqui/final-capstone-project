class Rental < ApplicationRecord
  belongs_to :user
  belongs_to :car

  validate :return_date_cannot_be_before_rent_date

  def return_date_cannot_be_before_rent_date
    return unless date_return.present? && date_return < date_rent

    errors.add(:date_return, "can't be before rent date")
  end
end
