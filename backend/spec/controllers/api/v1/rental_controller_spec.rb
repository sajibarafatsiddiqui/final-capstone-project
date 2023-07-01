require 'rails_helper'

RSpec.describe Api::V1::RentalsController, type: :request do
  describe 'Rental Requests' do
    before do
      Car.destroy_all
      Rental.destroy_all
      User.destroy_all
      @user = User.create(first_name: 'Bob', last_name: 'Sullivan', gender: 'Male', age: 40,
                          email: 'sully@gmail.com')

      @new_car = Car.create(car_model: 'Lexus R12', car_status: 'New', rent_price: 1200.45, car_image: 'https://th.bing.com/th?id=OAID.ff673dccbcefdc0bde761bee3fe980c1&w=180&h=120&c=2&rs=1&qlt=80&o=6&cdv=1&pid=16.1')

      @car_params = Car.create(car_model: 'Toyota Q13', car_status: 'New', rent_price: 650.45, car_image: 'https://th.bing.com/th?id=OAID.ff673dccbcefdc0bde761bee3fe980c1&w=180&h=120&c=2&rs=1&qlt=80&o=6&cdv=1&pid=16.1')

      @rental_params = { date_rent: '12-06-2023', date_return: '20-06-2023', destination: 'Kentucky',
                         car_id: @new_car['id'], user_id: @user['id'] }
    end

    describe 'POST api/v1/rentals' do
      it 'Creates A Rental' do
        post '/api/v1/login', params: { user: { email: @user.email } }

        post '/api/v1/rentals', params: { rental: @rental_params }

        expect(JSON.parse(response.body)['destination']).to eq('Kentucky')
        expect(response.status).to eq(201)
      end
    end
  end
end
