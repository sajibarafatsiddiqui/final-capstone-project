import { createAsyncThunk } from '@reduxjs/toolkit'
import domain from "../../config/api"
import getRequest from "../../utils/getRequest"
import postRequest from "../../utils/postRequest"

const get_details = (id) => {
    const url = `${domain}/books/${id}`
    return getRequest(url)
}

const create_reservation = (payload) => {
    const url = `${domain}/books`
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return postRequest(url, options)
}

const details = {
    get_book: createAsyncThunk(
        'GET_BOOK',
        get_details
    ),
    create_reservation: createAsyncThunk(
        'CREATE_RESERVATION',
        create_reservation
    )
}

export default details