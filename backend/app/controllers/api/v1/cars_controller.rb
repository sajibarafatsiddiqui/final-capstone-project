module Api
  module V1
    class CarsController < ApplicationController
      include ::ActionController::Cookies

      def index
        @cars = Car.all
        render json: @cars.map { |car|
                       { id: car.id, model: car.car_model, rent_price: car.rent_price, status: car.car_status,
                         image: car.car_image }
                     }
      end

      def create
        @car = Car.new(car_params)

        if @car.save
          render json: @car, status: :created
        else
          render json: @car.errors, status: :unprocessable_entity
        end
      end

      def show
        @car = Car.find(params[:id])
        render json: { id: @car.id, model: @car.car_model, rent_price: @car.rent_price, status: @car.car_status,
                       image: @car.car_image }
      end

      def destroy
        @car = Car.find(params[:id])
        @car.destroy
        head :no_content
      end


      private

      def car_params
        params.require(:car).permit(:car_image, :car_model, :rent_price, :car_status)
      end
    end
  end
end
