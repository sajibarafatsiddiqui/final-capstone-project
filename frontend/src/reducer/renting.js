import {
    CREATE_RENTAL,
    LIST_RENTAL,
    CANCEL_RENTAL,
} from "../action/types";

const initialStateRentals=[]


function rentalReducer(rentals = initialStateRentals, action){
    const {type, payload} = action;

    switch (type) {
        case CREATE_RENTAL:
            return [...rentails, payload];

        case LIST_RENTAL:
            return payload;
        
        case CANCEL_RENTAL:
            return rentals.filter(({id})=> id !== payload.id)
    
        default:
            return rentals;
    }
}

export default rentalReducer;