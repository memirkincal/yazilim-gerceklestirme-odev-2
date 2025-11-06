# app/controllers/api/v1/posts_controller.rb

class Api::V1::PostsController < ApplicationController
  def index
    # .all kullandığınızdan emin olun. .first veya .find DEĞİL.
    @posts = Post.all

    render json: @posts
  end
end