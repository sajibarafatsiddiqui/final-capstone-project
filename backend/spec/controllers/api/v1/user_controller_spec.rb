require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :request do
  describe 'User Request' do
    before do
      Car.destroy_all
      Rental.destroy_all
      User.destroy_all
      @user_params = { first_name: 'Bob', last_name: 'Sullivan', gender: 'Male', age: 40,
                       email: 'sully@gmail.com' }
    end

    describe 'POST /api/v1/users' do
      it 'Registers a User' do
        post '/api/v1/users', params: { user: @user_params }
        expect(response.status).to eq(200)
      end
    end
  end
end
