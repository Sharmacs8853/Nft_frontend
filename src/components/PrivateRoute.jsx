import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const navigate = useNavigate()
    const {isAuth,token} = useSelector((store) => store.authReducer);
    
    useEffect(() => {
        if (!isAuth && token.token == undefined) {
            navigate('/login')
        }
    }, [])
    return children;
  
}

export default PrivateRoute