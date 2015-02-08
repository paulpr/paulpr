Rails.application.routes.draw do
  # Dashboards
  get '/dashboard', to: 'dashboards#index'
  get '/dashboard/styleguide', to: 'dashboards#styleguide'
  get '/repos', to: 'dashboards#repos'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  resource :github_webhooks, only: :create, defaults: { formats: :json }

  root to: 'pages#home'
end
