import axios from 'axios'
import * as types from './actionType'


export const getUsersDataRequest = () =>{
    return {
        type: types.GET_USERS_DATA_REQUEST
    }
}
export const getUsersDataSuccess = (payload) =>{
    return {
        type: types.GET_USERS_DATA_SUCCESS,
        payload
    }   
}
export const getUsersDataFailure = () =>{
    return {
        type: types.GET_USERS_DATA_FAILURE
    }
}

export const getUsersData = () => (dispatch) =>{
    dispatch(getUsersDataRequest());
    return axios.get(`https://nft-backend-app.onrender.com/admin/users`)
    .then((res)=>{
        console.log(res.data);
        dispatch(getUsersDataSuccess(res.data))
    })
    .catch((err)=>{
        console.log(err);
        dispatch(getUsersDataFailure());
    })
}
