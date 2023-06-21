class Api::V1::CarsController < ApplicationController

    def index
        @cars = Car.all
        render json: @cars.map { |car| { model: car.model, rent_price: car.rent_price, status: car.status, image: car.image } }
    end
  def create
    @car = Car.new(car_params)

    if @car.save
      render json: @car, status: :created, location: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  def show
    @car = Car.find(params[:id])
    render json: { model: @car.model, rent_price: @car.rent_price, status: @car.status, image: @car.image }
  end

  def destroy
    @car = Car.find(params[:id])
    @car.destroy
    head :no_content
  end

  private

  def rental_params
    params.require(:rental).permit(:user_id, :car_id, :start_date, :end_date)
  end

  private

  def car_params
    params.require(:car).permit(:image_model, :status, :rent, :price)
  end
end
