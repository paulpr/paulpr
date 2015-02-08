Rails.application.routes.draw do
  # Dashboards
  get '/dashboard', to: 'dashboards#index'
  get '/dashboard/styleguide', to: 'dashboards#styleguide'

  resource :github_webhooks, only: :create, defaults: { formats: :json }

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  root to: 'pages#home'
end
