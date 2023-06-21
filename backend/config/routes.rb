Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :cars, only: [:create, :delete, :update, :new]
      resources :rentals, only: [:create, :delete, :update, :new]

    end
  end
end
