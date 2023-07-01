module Api
  module V1
    class UsersController < ApplicationController
      include Passwordless::ControllerHelpers
      def create
        @user = User.new(user_params)
        if @user.save
          render json: { status: :created }
        else
          render json: { errors: @user.errors.full_messages },
                 status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :gender, :age)
      end

      def passwordless_options_for(_user)
        { ignore_magic_link: true }
      end
    end
  end
end
