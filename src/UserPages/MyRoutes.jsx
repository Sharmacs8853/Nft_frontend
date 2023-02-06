import { Box, } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Contacts from '../Pages/Contacts'
import Dashboard from '../Pages/Dashboard'
import Layout from '../Pages/Layout'
import Progress from '../Pages/Progress'
import Tagline from '../Pages/Tagline'
import Users from '../Pages/Users'
import Contact from './Contact/Contact'
import HomePage from './HomePage/HomePage'
import LoginPage from './Login/LoginPage'

const MyRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin' element={<Layout />} />
                <Route path='/user' element={<Users />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/dashboard' element={
                    // <PrivateRoute>
                        <Dashboard />
                    // </PrivateRoute>

                } />
                <Route path='/tagline' element={<Tagline />} />
                <Route path='/progress' element={<Progress />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </Box>
    )
}

export default MyRoutes