import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import MainArea from '../components/MainArea/MainArea'
import SideBar from '../components/SideBar/SideBar'
import TopBar from '../components/TopBar/TopBar'


const Layout = () => {
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
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Layout