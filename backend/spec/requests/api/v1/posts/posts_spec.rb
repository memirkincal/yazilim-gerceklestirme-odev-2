# spec/requests/api/v1/posts/posts_spec.rb
require 'rails_helper'

RSpec.describe "Api::V1::Posts", type: :request do
  describe "GET /api/v1/posts" do

    # Test başlamadan önce veritabanına bir tane Post oluştur:
    before do
      Post.create(title: "Test Başlığı", content: "Test içeriği")
    end

    it "returns all posts" do
      get "/api/v1/posts"
      
      # Yanıtın başarılı olmasını bekle
      expect(response).to have_http_status(:ok)
      
      # Dönen JSON'u Ruby hash'ine çevir
      json_response = JSON.parse(response.body)
      
      # YENİ TEST 1: Dönen dizide 1 eleman olmalı
      expect(json_response.size).to eq(1)
      
      # YENİ TEST 2: O elemanın başlığı "Test Başlığı" olmalı
      expect(json_response[0]['title']).to eq("Test Başlığı")
    end

  end
end