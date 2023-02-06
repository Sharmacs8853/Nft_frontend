import { Box, Button, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/authReducer/action'
import LoginPage_style from "./LoginPage.module.css"

let initailData = {
  email: "",
  password: ""
}
const LoginPage = () => {
  const [formData, setFormData] = useState(initailData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store.authReducer.token);

  const { email, password } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formData))
  }

  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
  }, [handleSubmit])
  console.log("isAuth from", token);
  return (
    <Box className={LoginPage_style.container}>
      <Box className={LoginPage_style.form_div}>
        <form onSubmit={handleSubmit}>
          <Stack>
            <Box textAlign={'center'}>
              <Heading>Admin Login</Heading>
            </Box>
            <Box>
              <label>Email</label>
              <Input name='email' value={email} onChange={handleChange} placeholder='Enter email ' />
            </Box>
            <Box>
              <label>Password</label>
              <Input name='password' value={password} onChange={handleChange} placeholder='Enter password' />
            </Box>
            <Box>
              <Button type='submit'>Login</Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default LoginPage