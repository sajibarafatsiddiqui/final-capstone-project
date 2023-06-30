require 'rails_helper'

RSpec.describe Api::v1::SessionsController, type: :request do
    before do
        Car.destroy_all
        Rental.destroy_all
        User.destroy_all
        @user_params = { first_name: 'Bob', last_name: 'Sullivan', gender: 'Male', age: 40, email: 'sully@gmail.com' }
    end

    describe 'POST /api/v1/login' do
        it 'Logs in a User' do
            post '/api/v1/login', params: {user: { email: 'sully@gmail.com'}}
            expect(response.status).to eq(201)
        end
    end
end