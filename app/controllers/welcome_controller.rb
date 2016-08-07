class WelcomeController < ApplicationController
  def index
  end

  def show
  end
  
  def send_name
    @name = params[:name]
    url = 'http://git-garden.m3kpjgrp8e.us-west-2.elasticbeanstalk.com/api/'+ params[:name].to_s
    uri = URI(url)
    response = Net::HTTP.get(uri)
    binding.pry
    @response = JSON.parse(response)
    render 'show'
  end 
end
