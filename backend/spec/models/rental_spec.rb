require 'rails_helper'

RSpec.describe Rental, type: :model do
  before(:each) do
    @user = User.new(first_name: 'Sarah', last_name: 'Turner', gender: 'Female', age: 27,
                     email: 'sarahturner@gmail.com')

    @user.save!

    @car = Car.new(car_model: 'Mercedes Y3', rent_price: 3000, car_status: 'New', car_image: 'https://di-uploads-pod1.dealerinspire.com/mercedesbenzofakron/uploads/2021/09/2021-GLA.jpg')

    @car.save!

    @rental = Rental.new(date_rent: '12-06-2023', date_return: '20-06-2023', destination: 'Kentucky',
                         car_id: @car.id, user_id: @user.id)
  end

  it 'Should have a User Id in the form of an integer' do
    @rental.user_id = nil
    expect(@rental).to_not be_valid
    @rental.user_id = 'Hi'
    expect(@rental).to_not be_valid
  end

  it 'Should have a Car Id in the form of an integer' do
    @rental.car_id = nil
    expect(@rental).to_not be_valid
    @rental.car_id = 'Hi'
    expect(@rental).to_not be_valid
  end

  it 'Should have a Destination' do
    @rental.destination = nil
    expect(@rental).to_not be_valid
  end
end
