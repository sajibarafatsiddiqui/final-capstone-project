import { configureStore } from '@reduxjs/toolkit';
import cars from './cars';
import reservations from './rental';
import authentication from './authentication';

const rootReducer = { cars, reservations, authentication };

const store = configureStore({
    reducer: rootReducer,
});

export default store;