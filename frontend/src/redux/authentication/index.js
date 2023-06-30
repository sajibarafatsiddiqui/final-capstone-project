import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCar, getCarDetails, getCars, signIn, signUp } from '../../helpers/helpers';

const FETCH = 'rental/user/FETCH';
const SIGNIN = 'rental/user/SIGNIN'
const ADD = 'rental/user/ADD';
const DELETE = 'rental/user/DELETE';

// export const fetchUsers = createAsyncThunk(FETCH, async () => {
//     const cars = await getCars();
//     return cars;
// });

export const uploadUser = createAsyncThunk(ADD, async (user) => {
    await signUp(user);
    return user;
});

export const signinReducer = createAsyncThunk(SIGNIN, async (user) => {
    let result = await signIn(user);
    return  result;
});

// export const removeCar = createAsyncThunk(DELETE, async (id) => {
//     await deleteBook(id);
//     return id;
// });

const initialState = {
    user: {},
    authenticatedUser: {}
};



const usersSlice = createSlice({
    name: 'rental/user',
    initialState,
    extraReducers: {
        [uploadUser.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.user = action.payload;
        },
        [signinReducer.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.authenticatedUser = action.payload;
        },
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