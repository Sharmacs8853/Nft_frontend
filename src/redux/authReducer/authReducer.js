import * as types from "./actionTyle";

const initailState = {

    isAuth: false,
    isLoading: false,
    isError: false,
    token: ""
}

export const authReducer = (state = initailState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth:true,
                token: payload
            };

        case types.LOGIN_FAILURE:
            return {
                ...state,
                isAuth:false,
                isError: true,
                isLoading: false
            };

        default:
            return state;
    }
}