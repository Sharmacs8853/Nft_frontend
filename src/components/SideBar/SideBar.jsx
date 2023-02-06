import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <Box  style={{backgroundColor:"teal", color:"white", height:'600px'}} position={'fixed'} width={'200px'} mt={55}>
        <Flex direction={"column"} gap={8} py={5} px={5} mt={8}>
            <Link to='/progress'><Heading size={'sm'}> 👷 Progress</Heading></Link>
            <Link to='/tagline'><Heading size={'sm'}> 🏗️ Tagline</Heading></Link>
            <Link to='/contacts'><Heading size={'sm'}> 📞 Contacts</Heading></Link>
            <Link to='/users'><Heading size={'sm'}> 😮‍💨 Users</Heading></Link>
        </Flex>
    </Box>
  )
}

export default SideBar