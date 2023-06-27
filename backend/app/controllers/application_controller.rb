class ApplicationController < ActionController::API
  include Passwordless::ControllerHelpers
  before_action :require_user!

 # helper_method :current_user

  private

  def current_user
    @current_user ||= lookup_user_by_cookie
  end

  def lookup_user_by_cookie
    User.find(session[:user_id]) if session[:user_id]
  end

  def require_user!
    return if current_user
    render json: { error: 'You must be logged in to perform this action' }, status: :unauthorized
  end

  skip_before_action :require_user!, only: [:sign_in, :login], if: -> { request.path.include?('/api/v1/users') || request.path.include?('/api/v1/login') }
end
