class Car < ApplicationRecord
    has_many :rentals
    validates :car_model, presence: true, format: {with: /[a-zA-Z]/}
    validates :car_status, presence: true, format: {with: /[a-zA-Z]/}
    validates :rent_price, presence: true, numericality: true
    validates :car_image, presence: true, format: {with: /[a-zA-Z]/}
end
