import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRentals, addRental } from '../../helpers/helpers';

const FETCH = 'rental/reservations/FETCH';
const ADD = 'rental/reservations/ADD';

export const fetchReservations = createAsyncThunk(FETCH, async () => {
    const reservations = await getRentals();
    return reservations;
});

export const saveReservation = createAsyncThunk(ADD, async (reservation) => {
    await addRental(reservation);
    return reservation;
});

const initialState = {
    reservations: [],
};

const reservationsSlice = createSlice({
    name: 'rental/reservations',
    initialState,
    extraReducers: {
        [fetchReservations.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.reservations = action.payload;
        },
        [saveReservation.fulfilled]: (state, action) => {
            const currentState = state;
            const reservation = { ...action.payload };
            currentState.reservations = [...state.reservations, reservation];
        },
    },
});

export default reservationsSlice.reducer;