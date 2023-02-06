import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import MainArea from '../components/MainArea/MainArea'
import SideBar from '../components/SideBar/SideBar'
import TopBar from '../components/TopBar/TopBar'
const Dashboard = () => {
    return (
        <Box>
            <Box>
                <TopBar />
            </Box>
            <Box>
                <Flex>
                    <Box width={'200px'}><SideBar /></Box>
                    <Box width={'84%'}>
                        <MainArea />
                        <Box m={2} >
                            <Flex wrap={'wrap'} gap={4}>
                                <Link to="/progress">
                                    <Box height={'150px'} width={"250px"} border={'2px solid teal'} borderRadius={5} backgroundColor={"orange.400"} color={'white'} p={4} ><Heading size={'md'}>Progress</Heading></Box>
                                </Link>
                                <Link to="/tagline">
                                    <Box height={'150px'} width={"250px"} border={'2px solid teal'} borderRadius={5} backgroundColor={"teal.400"} color={'white'} p={4} ><Heading size={'md'}>Tagline</Heading></Box>
                                </Link>
                                <Link to="/contacts">
                                    <Box height={'150px'} width={"250px"} border={'2px solid teal'} borderRadius={5} backgroundColor={"orange.400"} color={'white'} p={4} ><Heading size={'md'}>Contacts</Heading></Box>
                                </Link>
                                <Link to="/users">
                                    <Box height={'150px'} width={"250px"} border={'2px solid teal'} borderRadius={5} backgroundColor={"teal.400"} color={'white'} p={4} ><Heading size={'md'}>Users</Heading></Box>
                                </Link>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>

    )
}

export default Dashboard