Rails.application.routes.draw do
  # Dashboards
  get '/dashboard', to: 'dashboards#index'

  # Auth
  get '/auth/:provider/callback', to: 'sessions#create'
end
