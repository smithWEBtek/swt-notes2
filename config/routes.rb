Rails.application.routes.draw do

  root 'api/notes#index'

  namespace :api do
    resources :notes
  end
end
