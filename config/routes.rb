Rails.application.routes.draw do
  # Dashboards
  get '/dashboard', to: 'dashboards#index'
  get '/dashboard/styleguide', to: 'dashboards#styleguide'

  # Auth
  get '/auth/:provider/callback', to: 'sessions#create'



  resource :github_webhooks, only: :create, defaults: { formats: :json }

  root to: 'pages#home'
end
