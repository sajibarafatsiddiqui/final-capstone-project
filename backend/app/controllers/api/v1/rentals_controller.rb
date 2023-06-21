class Api::V1::RentalsController < ApplicationController

    def create
        @rental = Rental.new(rental_params)
    
        if @rental.save
          render json: @rental, status: :created, location: @rental
        else
          render json: @rental.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @rental = Rental.find(params[:id])
        @rental.destroy
        head :no_content
      end

    
end
