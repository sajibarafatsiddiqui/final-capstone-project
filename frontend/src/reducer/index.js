import { combineReducers } from "@reduxjs/toolkit";
import carReducer from "./car";
import rentalReducer from "./renting";
import userReducer from "./authentication";

export default combineReducers({
    carReducer,
    rentalReducer,
    userReducer
})