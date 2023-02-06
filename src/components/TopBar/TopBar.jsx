import React from 'react'
import { Box, Flex, Spacer,Input, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SettingsIcon, BellIcon} from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
const TopBar = () => {
  const store = useSelector((store)=>store.authReducer.token.email);
  console.log('store', store);
  return (
    <Box style={{backgroundColor:"teal", color:"white"}} px={5} py={3} position={'fixed'} width={'100%'} zIndex={'1000'}>
        <Flex gap={5}>
            <Link to="/dashboard" ><Heading size={"md"}>Dashboard</Heading></Link>
            <Spacer />
            <Input width={'150px'} placeholder='Type here...'  _placeholder={{ opacity: 1, color: 'white' }} size='md' />
            <span>{store}</span>
            <Link to='/setting'><SettingsIcon/></Link>
            <Link to='/notification'><BellIcon/></Link>
        </Flex>
    </Box>
  )
}

export default TopBar