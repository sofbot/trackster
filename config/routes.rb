Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
  end

  resources :projects, only: [:index, :create, :destroy, :show, :update] do
    resources :stories, only: [:index, :create]
  end
  resources :stories, only: [:destroy, :show, :update]
  resources :invites, only: [:create, :destroy]

  root 'static_pages#root'
end
