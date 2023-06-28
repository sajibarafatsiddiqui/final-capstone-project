import api from '../api'
import {
    SIGN_IN,
    SIGN_OUT
} from './types'


// autentication
export const signIn = email => async (dispatch) => {
    try {
        const res = api.post('/signin', email);
        dispatch({
            type: SIGN_IN,
            payload: res.data
        })

        return Promise.resolve(res.data)

    } catch (error) {
        return Promise.reject(error)
    }
}

export const signOut = token => async (dispatch) => {
    try {
        const res = api.post('/signout', token);
        dispatch({
            type: SIGN_OUT,
            payload: res.data
        })

        return Promise.resolve(res.data)

    } catch (error) {
        return Promise.reject(error)
    }
}