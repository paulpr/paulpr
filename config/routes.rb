Rails.application.routes.draw do
  # Dashboards
  get '/dashboard', to: 'dashboards#index'
  get '/dashboard/styleguide', to: 'dashboards#styleguide'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  
  root to: 'pages#home'
end
