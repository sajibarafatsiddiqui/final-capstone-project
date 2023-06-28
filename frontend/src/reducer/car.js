import {
    CREATE_CAR,
    LIST_CAR,
    FIND_CAR_BY_ID,
    DELETE_CAR,
} from "../action/types";

const initialStateCars = [];
const initlaStateSelectedCar = {};

function carReducer(cars = initialStateCars, action){
    const {type, payload} = action;

    switch (type) {
        case CREATE_CAR:
            return [...cars, payload];
        
        case LIST_CAR:
            return payload;

        case FIND_CAR_BY_ID:
            return [...initlaStateSelectedCar, payload];

        case DELETE_CAR:
            return cars.filter(({id}) => id !== payload.id)
    
        default:
            return cars;
    }
}

export default carReducer;