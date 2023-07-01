# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'sessions#create'
      delete '/logoff', to: 'sessions#destroy'
      resources :cars, only: %i[create delete update new index show]
      resources :rentals, only: %i[create delete update new index show]
    end
  end
end
