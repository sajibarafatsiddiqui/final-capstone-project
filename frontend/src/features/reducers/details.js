import { createSlice } from '@reduxjs/toolkit'
import details from '../async_thunks/details'
const { get_book, create_reservation } = details

const initialState = {
    details: {
        value: [],
        loading: 'idle',
        error: []
    },
    reservation_message
}

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(get_book.pending, state => {
            state.details.loading = 'pending'
            state.error = []
        })
        .addCase(get_book.fulfilled, (state, actions) => {
            if (actions.payload.status === 200) {
                state.value = actions.payload
                state.loading = 'success'
                state.error = []
            } else {
                state.value = []
                state.loading = 'failed'
                state.error = actions.payload
            }
        })
        .addCase(get_book.rejected, (state, actions) => {
            state.value = []
            state.loading = 'failed'
            state.error = actions.payload
        })
        builder.addCase(create_reservation.pending, state => {
            state.loading = 'pending'
            state.error = []
        })
        .addCase(create_reservation.fulfilled, (state, actions) => {
            if (actions.payload.status === 200) {
                state.value = actions.payload
                state.loading = 'success'
                state.error = []
            } else {
                state.value = []
                state.loading = 'failed'
                state.error = actions.payload
            }
        })
        .addCase(create_reservation.rejected, (state, actions) => {
            state.value = []
            state.loading = 'failed'
            state.error = actions.payload
        })
    }
})

export default detailsSlice.reducer