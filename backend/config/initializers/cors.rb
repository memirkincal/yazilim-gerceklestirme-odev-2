# backend/config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins '*' -> HERHANGİ BİR YERDEN gelen isteğe izin ver.
    # Geliştirme için en kolay yöntem budur.
    origins '*' 

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end