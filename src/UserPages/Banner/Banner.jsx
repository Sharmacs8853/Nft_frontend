import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import banner_style from './Banner.module.css'
import boyImage from '../../components/Image/banner_nft.png'
import appstore from "../../components/Image/appstore.png"
import { RiYoutubeFill, RiGoogleFill, RiTwitterFill } from "react-icons/ri"
import axios from 'axios'
import { useState } from 'react'

const Banner = () => {
  const [tagline, settagline] = useState([])
  const [data, setData] = useState([])
  // let data = [
  //   {
  //     id: 1,
  //     active_user: 42,
  //     role: 'User Active'
  //   },
  //   {
  //     id: 2,
  //     active_user: 8,
  //     role: 'Artwork'
  //   },
  //   {
  //     id: 3,
  //     active_user: 2,
  //     role: 'Artist'
  //   }
  // ]
  const getTagline = () => {
    axios.get(`https://nft-backend-app.onrender.com/tagline/get`)
      .then((result) => {
        console.log(result.data);
        settagline(result.data)
      }).catch((err) => {
        console.log(err);
      });
  }

  const getprogress = () => {
    axios.get(`https://nft-backend-app.onrender.com/progress/get`)
      .then((result) => {
        console.log(result.data);
        setData(result.data)
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getTagline()
    getprogress()
  }, [])

  console.log('tagline', tagline);
  console.log('tagline',);
  return (
    <Box className={banner_style.container}>
      <Box className={banner_style.tagline_container}>
        <Heading className={banner_style.tagline} fontSize={'50px'}>{tagline.length > 0 ? tagline[tagline.length - 1].tagline : ""}</Heading>
      </Box>
      <Box className={banner_style.image_section}>
        <Box className={banner_style.left_container}>
          <Flex className={banner_style.appstore_section}>
            <Box>
              <Heading py={'20px'} pr={'50px'} size={'sm'} color={'white'} fontWeight={'400'}>Digital marketplace  for crypto Collections and non-fungible token (NFTs), Buy, sell, and discover exclusive digital assets.</Heading>
            </Box>
            <Box>
              <button className={banner_style.button}>Discover</button>
            </Box>
            <Box>
              <Image src={appstore} />
            </Box>
          </Flex>
        </Box>
        <Box className={banner_style.middle_container}>
          <Box className={banner_style.image_div}>
            <Image height={'100%'} width={'100%'} src={boyImage} />
          </Box>
        </Box>
        <Box className={banner_style.right_container}>
          <Box>
            <Flex flexDirection={'column'} gap={'100px'} className={banner_style.active_user_box}>
              <Box>
                <Flex gap={'30px'} flexDirection={'column'} >
                  {/* {
                    data?.map((ele) => (
                      <Box className={banner_style.div_active}>
                        <Flex flexDirection={'column'} textAlign={'right'} >
                          <Heading fontWeight={'600'} color={'white'} size={'xl'}>{ele.active_user}K + </Heading>
                          <Heading fontWeight={'600'} color={'gray.400'} size={'xs'}>{ele.role}</Heading>
                        </Flex>
                      </Box>
                    ))
                  } */}
                  <Box className={banner_style.div_active}>
                    <Flex flexDirection={'column'} textAlign={'right'} >
                      <Heading fontWeight={'600'} color={'white'} size={'xl'}>{data.length > 0 ? data[data.length - 1].active_user : ""}K + </Heading>
                      <Heading fontWeight={'600'} color={'gray.400'} size={'xs'}>User Active</Heading>
                    </Flex>
                  </Box>
                  <Box className={banner_style.div_active}>
                    <Flex flexDirection={'column'} textAlign={'right'} >
                      <Heading fontWeight={'600'} color={'white'} size={'xl'}>{data.length > 0 ? data[data.length - 1].artwork : ""}K + </Heading>
                      <Heading fontWeight={'600'} color={'gray.400'} size={'xs'}>Artwork</Heading>
                    </Flex>
                  </Box>
                  <Box className={banner_style.div_active}>
                    <Flex flexDirection={'column'} textAlign={'right'} >
                      <Heading fontWeight={'600'} color={'white'} size={'xl'}>{data.length > 0 ? data[data.length - 1].artist : ""}K + </Heading>
                      <Heading fontWeight={'600'} color={'gray.400'} size={'xs'}>Artist</Heading>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex gap={'20px'} justifyContent={"right"}>
                  <Heading size={'lg'} fontWeight={'600'} color={'white'}><RiYoutubeFill /></Heading>
                  <Heading size={'lg'} fontWeight={'600'} color={'white'}><RiGoogleFill /></Heading>
                  <Heading size={'lg'} fontWeight={'600'} color={'white'}><RiTwitterFill /></Heading>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Banner