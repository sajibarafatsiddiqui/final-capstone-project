# frozen_string_literal: true

class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :car_model
      t.string :car_status
      t.float :rent_price
      t.string :car_image

      t.timestamps
    end
  end
end
