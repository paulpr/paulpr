class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def developer
    authenticate_and_redirect
  end

  def github
    authenticate_and_redirect
  end

  private

  def authenticate_and_redirect
    @user = User.from_omniauth(auth_hash)
    sign_in_and_redirect(@user)
  end

  def auth_hash
    request.env['omniauth.auth']
  end
end
