import { useDispatch } from 'react-redux';
import api from '../api'
import {
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP
} from './types'


// autentication
export const  signIn = async (data) => {

    const userObj = {user: data}
    try {
        const res = await api.post('/login', JSON.stringify(userObj));
        console.log(res.data);

        await useDispatch({
            type: SIGN_IN,
            payload: res.data
        })

        return   res.data;

    } catch (err) {
        throw new Error(err);
        // console.log(error);
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

// signup
export const signUp = data => async (dispatch) => {
    try {
        const res = api.post('/users', data);
        dispatch({
            type: SIGN_UP,
            payload: res.data
        })

        return Promise.resolve(res.data)

    } catch (error) {
        return Promise.reject(error)
    }
}