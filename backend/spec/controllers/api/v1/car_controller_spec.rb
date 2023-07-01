require 'rails_helper'

RSpec.describe Api::V1::CarsController, type: :request do
  describe 'Cars Requests' do
    before do
      Car.destroy_all
      Rental.destroy_all
      User.destroy_all

      @user = User.create(first_name: 'Bob', last_name: 'Sullivan', gender: 'Male', age: 40,
                          email: 'sully@gmail.com')

      @new_car = Car.create(car_model: 'Lexus R12', car_status: 'New', rent_price: 1200.45, car_image: 'https://th.bing.com/th?id=OAID.ff673dccbcefdc0bde761bee3fe980c1&w=180&h=120&c=2&rs=1&qlt=80&o=6&cdv=1&pid=16.1')

      @car_params = { car_model: 'Toyota Q13', car_status: 'New', rent_price: 650.45, car_image: 'https://th.bing.com/th?id=OAID.ff673dccbcefdc0bde761bee3fe980c1&w=180&h=120&c=2&rs=1&qlt=80&o=6&cdv=1&pid=16.1' }
    end

    describe 'POST api/v1/cars' do
      it 'Creates a Car' do
        post '/api/v1/login', params: { user: { email: @user.email } }

        post '/api/v1/cars',
             params: { car: { car_model: 'Toyota Q13', car_status: 'New', rent_price: 650.45, car_image: 'https://th.bing.com/th?id=OAID.ff673dccbcefdc0bde761bee3fe980c1&w=180&h=120&c=2&rs=1&qlt=80&o=6&cdv=1&pid=16.1' } }
        expect(response.status).to eq(201)
      end
    end

    describe 'GET api/v1/cars' do
      it 'Gets All Cars' do
        post '/api/v1/login', params: { user: { email: @user.email } }

        get '/api/v1/cars'
        expect(response.status).to eq(200)
      end
    end
  end
end
