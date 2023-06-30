import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCar, getCarDetails, getCars } from '../../helpers/helpers';

const FETCH = 'rental/cars/FETCH';
const ADD = 'rental/cars/ADD';
const DELETE = 'rental/cars/DELETE';

export const fetchCars = createAsyncThunk(FETCH, async () => {
    const cars = await getCars();
    return cars;
});

export const fetchCarDetails = createAsyncThunk(FETCH, async (id) => {
    const selectedCar = await getCarDetails(id);
    return selectedCar;
});


export const saveCar = createAsyncThunk(ADD, async (car) => {
    await addCar(car);
    return car;
});

// export const removeCar = createAsyncThunk(DELETE, async (id) => {
//     await deleteBook(id);
//     return id;
// });

const initialState = {
    cars: [],
    selectedCar: {}
};



const carsSlice = createSlice({
    name: 'rental/cars',
    initialState,
    extraReducers: {
        [fetchCars.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.cars = action.payload;
        },
        [fetchCarDetails.fulfilled]: (state, action) => {
            const currentState = state;
            currentState.selectedCar = action.payload;
        },
        [saveCar.fulfilled]: (state, action) => {
            const currentState = state;
            const car = { ...action.payload };
            currentState.cars = [...state.cars, car];
        },
        // [removeBook.fulfilled]: (state, action) => {
        //     const currentState = state;
        //     currentState.books = state.books.filter(
        //         (book) => book.id !== action.payload,
        //     );
        // },
    },
});

export default carsSlice.reducer;