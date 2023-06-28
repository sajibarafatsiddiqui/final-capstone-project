import { combineReducers } from "@reduxjs/toolkit";
import carReducer from "./car";
import rentalReducer from "./renting";

export default combineReducers({
    carReducer,
    rentalReducer
})