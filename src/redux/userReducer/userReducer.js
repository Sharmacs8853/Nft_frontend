import * as types from './actionType';
const initialState = {
    users: [],
    isLoading: false,
    isError: true
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.GET_USERS_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.GET_USERS_DATA_SUCCESS:
            return {
                ...state,
                users:payload,
                isLoading: false,
                isError: false
            }
        case types.GET_USERS_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default: {
            return state
        }
    }
}

export {userReducer}