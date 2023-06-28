import api from '../api'
import {
    CREATE_RENTAL,
    LIST_RENTAL,
    CANCEL_RENTAL,
    SIGN_IN,
    SIGN_OUT
} from './types'

// rental

export const createRental = obj => async (dispatch) => {
    try {
        const res = api.post('/rental', obj);
        dispatch({
            type: CREATE_RENTAL,
            payload: res.data
        })

        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const listRental = async (dispatch) => {
    try {
        const res = api.get('/rental');
        dispatch({
            type: LIST_RENTAL,
            payload: res.data
        })

        return Promise.resolve(res.data)

    } catch (error) {
        return Promise.reject(error)
    }
}

export const cancelRental = id => async(dispatch)=>{
    try {
        const res = api.delete(`/rental/${id}`);
        dispatch({
            type: CANCEL_RENTAL,
            payload: {id}
        })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}