class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable
  devise :database_authenticatable, :recoverable, :trackable, :validatable, :registerable
  devise :omniauthable, omniauth_providers: [:github]

  has_many :repos

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name
      user.github_token = auth.credentials.token
    end
  end
end
