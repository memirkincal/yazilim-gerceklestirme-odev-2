Rails.application.routes.draw do

  # API rotalarımızı /api/v1/ öneki ile gruplandırıyoruz
  namespace :api do
    namespace :v1 do
      # /api/v1/posts adresine gelen GET isteğini
      # posts controller'ındaki 'index' metoduna yönlendir.
      resources :posts, only: [:index]
    end
  end

  # Diğer Rails rotaları (eğer varsa) buraya gelebilir
  # Şimdilik burası boş kalabilir.

end