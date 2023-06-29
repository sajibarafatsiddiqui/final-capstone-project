import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCar, getCarDetails, getCars, signUp } from '../../helpers/helpers';

const FETCH = 'rental/users/FETCH';
const ADD = 'rental/users/ADD';
const DELETE = 'rental/users/DELETE';

// export const fetchUsers = createAsyncThunk(FETCH, async () => {
//     const cars = await getCars();
//     return cars;
// });

export const uploadUser = createAsyncThunk(ADD, async (user) => {
    await signUp(user);
    return user;
});

// export const removeCar = createAsyncThunk(DELETE, async (id) => {
//     await deleteBook(id);
//     return id;
// });

const initialState = {
    user: {},
};



const usersSlice = createSlice({
    name: 'rental/users',
    initialState,
    extraReducers: {
        [uploadUser.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.user = action.payload;
        },
        // [fetchCarDetails.fulfilled]: (state, action) => {
        //     const currentState = state;
        //     currentState.selectedCar = action.payload;
        // },
        // [saveCar.fulfilled]: (state, action) => {
        //     const currentState = state;
        //     const car = { ...action.payload };
        //     currentState.cars = [...state.cars, car];
        // },
        // [removeBook.fulfilled]: (state, action) => {
        //     const currentState = state;
        //     currentState.books = state.books.filter(
        //         (book) => book.id !== action.payload,
        //     );
        // },
    },
});

export default usersSlice.reducer;