import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import footer_style from './Footer.module.css'

const Footer = () => {
    return (
        <Box className={footer_style.footer_container}>
            <Box className={footer_style.top_container}>
                <Box className={footer_style.box}>
                    <Heading size={'lg'} fontWeight={'600'} color={'white'}>Top Sellers</Heading>
                </Box>
                <Box className={footer_style.box}>
                    <Flex>
                        <Heading size={'lg'} fontWeight={'600'} color={'white'}>Open Gallery</Heading>
                        <Heading size={'lg'} fontWeight={'600'} color={'white'}>Icon</Heading>
                    </Flex>
                </Box>
            </Box>
            <Box className={footer_style.bottom_container}>
                <Flex my={'10px'}>
                    <Box pr={'40px'} borderRight={'2px solid white'} >
                        <Flex flexDirection={'column'} >
                            <Box  ><Heading size={'lg'} fontWeight={'600'} color={'white'}>Black Shodows</Heading></Box>
                            <Box><Heading size={'xs'} fontWeight={'600'} color={'white'}>@jitendra sharma</Heading></Box>
                        </Flex>
                    </Box>
                    <Box pl={'40px'}>
                        <Flex flexDirection={'column'}>
                            <Box><Heading size={'lg'} fontWeight={'600'} color={'white'}>267</Heading></Box>
                            <Box><Heading size={'xs'} fontWeight={'600'} color={'white'}>Artwork for sale</Heading></Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex my={'10px'}>
                    <Box pr={'40px'} borderRight={'2px solid white'} >
                        <Flex flexDirection={'column'} >
                            <Box  ><Heading size={'xs'} fontWeight={'600'} color={'white'}>Remaining Time</Heading></Box>
                            <Box><Heading size={'lg'} fontWeight={'600'} color={'white'}>22h:05m:35s</Heading></Box>
                        </Flex>
                    </Box>
                    <Box pl={'40px'}>
                        <Flex flexDirection={'column'}>
                            <Box><Heading size={'xs'} fontWeight={'600'} color={'white'}>Current Bid</Heading></Box>
                            <Box><Heading size={'lg'} fontWeight={'600'} color={'white'}>18.00</Heading></Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer