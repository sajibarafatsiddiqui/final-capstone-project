import { configureStore } from '@reduxjs/toolkit';
import cars from './cars';
import reservations from './rental';

const rootReducer = { cars, reservations };

const store = configureStore({
    reducer: rootReducer,
});

export default store;