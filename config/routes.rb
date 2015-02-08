Rails.application.routes.draw do
  # Dashboards
  get '/about', to: 'pages#about'
  get '/dashboard', to: 'dashboards#index'
  get '/dashboard/styleguide', to: 'dashboards#styleguide'

  resources :repos do
    get 'activate/:owner/:repo', on: :collection, to: 'repos#activate', as: :activate
    delete 'deactivate', on: :member, to: 'repos#deactivate', as: :deactivate
  end

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  resource :github_webhooks, only: :create, defaults: { formats: :json }

  root to: 'pages#home'
end
