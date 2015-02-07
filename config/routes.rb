Rails.application.routes.draw do
  # Dashboards
  get '/dashboard', to: 'dashboards#index'
  get '/dashboard/styleguide', to: 'dashboards#styleguide'

  # Auth
  get '/auth/:provider/callback', to: 'sessions#create'

  root to: 'pages#home'
end
