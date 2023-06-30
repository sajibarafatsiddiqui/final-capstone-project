import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRentals, addRental } from '../../helpers/helpers';

const FETCH = 'rental/reservations/FETCH';
const ADD = 'rental/reservations/ADD';
const DELETE = 'rental/reservations/DELETE';

export const fetchReservation = createAsyncThunk(FETCH, async () => {
    const reservations = await getRentals();
    return reservations;
});

export const saveReservation = createAsyncThunk(ADD, async (reservation) => {
    await addRental(reservation);
    return reservation;
});

// export const removeCar = createAsyncThunk(DELETE, async (id) => {
//     await deleteBook(id);
//     return id;
// });

const initialState = {
    reservations: [],
};



const reservationsSlice = createSlice({
    name: 'rental/reservations',
    initialState,
    extraReducers: {
        [fetchReservation.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.reservations = action.payload;
        },
        [saveReservation.fulfilled]: (state, action) => {
            const currentState = state;
            const reservation = { ...action.payload };
            currentState.reservations = [...state.reservations, reservation];
        },
        // [removeBook.fulfilled]: (state, action) => {
        //     const currentState = state;
        //     currentState.books = state.books.filter(
        //         (book) => book.id !== action.payload,
        //     );
        // },
    },
});

export default reservationsSlice.reducer;