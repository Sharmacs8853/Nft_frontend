import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Navbar_style from './Navbar.module.css'
import logo from '../Image/logo_nft.PNG'
import { Link } from 'react-router-dom'
import { TiShoppingBag } from 'react-icons/ti'
import { CiSearch } from "react-icons/ci"

const Navbar = () => {
    return (
        <Box className={Navbar_style.container}>
            <Box className={Navbar_style.logo}>
                <Image src={logo} />
            </Box>
            <Box className={Navbar_style.links_container}>
                <Link to='/'>Home</Link>
                <Link to='/'>BuyNFT</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'>Admin Login</Link>
            </Box>
            <Box>
                <Box className={Navbar_style.searchBox_container}>
                    <Box><Heading size={'lg'}><CiSearch /></Heading></Box>
                    <Box>
                        <input className={Navbar_style.input} type='text' placeholder='Browse shop' />
                    </Box>
                    <Box><button className={Navbar_style.search_button}><Heading size={'lg'}><TiShoppingBag /></Heading></button></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar