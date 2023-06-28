import {
    SIGN_UP,
    SIGN_IN,
    SIGN_OUT,
} from "../action/types";

const initialState = {};

function userReducer(user = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case SIGN_UP:
            return {...user, payload};
        
        case SIGN_IN:
            console.log(payload);
            return payload;

        case SIGN_OUT:
            return {};
    
        default:
            return user;
    }
}

export default userReducer;