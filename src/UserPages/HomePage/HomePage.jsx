import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import HomePage_style from './HomePage.module.css'

const HomePage = () => {
  return (
    <Box className={HomePage_style.container}>
        <Navbar />
        <Banner />
        <Footer />
    </Box>
  )
}

export default HomePage