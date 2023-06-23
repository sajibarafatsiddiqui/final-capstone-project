class Api::V1::RentalsController < ApplicationController

    def create
        @rental = Rental.new(rental_params.merge(user: current_user))
    
        if @rental.save
          render json: @rental, status: :created
        else
          render json: @rental.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @rental = Rental.find(params[:id])
        @rental.destroy
        head :no_content
      end
      
      private
      def rental_params
        params.require(:rental).permit(:date_rent, :date_return, :destination, :car_id)
      end

    
end
