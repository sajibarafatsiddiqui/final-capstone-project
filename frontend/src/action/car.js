import api from '../api'
import {
    CREATE_CAR,
    LIST_CAR,
    FIND_CAR_BY_ID,
    DELETE_CAR
} from './types'

export const createCar = obj => async (dispatch) => {
    try {
        const res = api.post('/car', obj);
        dispatch({
            type: CREATE_CAR,
            payload: res.data
        })

        return Promise.resolve(res.data)

    } catch (error) {
        return Promise.reject(error)
    }
}

export const listCar = async (dispatch) => {
    try {
        const res = api.get('/car');
        dispatch({
            type: LIST_CAR,
            payload: res.data
        })

        return Promise.resolve(res.data)

    } catch (error) {
        return Promise.reject(error)
    }
}

export const findCarById = id => async (dispatch) => {
    try {
        const res = api.get(`/car/${id}`);
        dispatch({
            type: FIND_CAR_BY_ID,
            payload: res.data
        })

        return Promise.resolve(res.data)

    } catch (error) {
        return Promise.reject(error)
    }
}

export const deleteCar = id => async (dispatch) => {
    try {
        const res = api.delete(`/car/${id}`);
        dispatch({
            type: DELETE_CAR,
            payload: {id}
        })
        return Promise.resolve(res.data);
    } catch (error) {
        return Promise.reject(error)
    }
}