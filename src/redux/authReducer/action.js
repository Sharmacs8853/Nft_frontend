import axios from 'axios';
import * as types from './actionTyle';

const login = (payload) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    return axios.post(`https://nft-backend-app.onrender.com/admin/login`, payload).then((res) => {
        console.log("res",res.data);
        return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data})
    }).catch((err) => {
        alert('login failed')
        dispatch({ type: types.LOGIN_FAILURE })
    })
}
export { login }