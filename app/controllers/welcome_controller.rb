class WelcomeController < ApplicationController
  def index
  end

  def show
  end

  def send_name
    @name = params[:name]
    url = 'https://prime2016.herokuapp.com/api/'+ params[:name].to_s
    uri = URI(url)
    response = Net::HTTP.get(uri)
    @response = JSON.parse(response)
    render 'show'
  end
end
