class Api::V1::SessionsController < ApplicationController
  include Passwordless::ControllerHelpers
  def create
    user = User.find_by(email: user_params[:email])
    if user 
      session[:user_id] = user.id
      render json: { session: session.id, first_name: user.first_name, last_name: user.last_name }
    else
      render json: { errors: ['Invalid email'] },
             status: :unprocessable_entity
    end
  end
  def destroy
    reset_session
    if current_user
      render json: {
        status: 200,
        message: 'Logged out successfully.'
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end

  def passwordless_options_for(user)
    { ignore_magic_link: true }
  end
  private
  
  def user_params
    params.require(:user).permit(:email)
  end

  
end
