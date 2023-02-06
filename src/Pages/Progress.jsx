import React, { useState } from 'react'
import { Box, Button, Flex, Heading, Spacer, useDisclosure } from '@chakra-ui/react'
import TopBar from '../components/TopBar/TopBar'
import SideBar from '../components/SideBar/SideBar'
import MainArea from '../components/MainArea/MainArea'
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import axios from 'axios';
import { useEffect } from 'react'
import AddProgress from '../components/chakraModal/Progress/AddProgress'

const Progress = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [progress, setprogress] = useState([]);
  const getProgress = () => {
    axios.get(`https://nft-backend-app.onrender.com/progress/get`)
      .then((result) => {
        //console.log(result.data);
        setprogress(result.data);
      }).catch((err) => {
        console.log('not found', err);
      });
  }
  //========delete ==========
  const handleDelete = (id) => {
    axios.delete(`https://nft-backend-app.onrender.com/progress/${id}`)
      .then((result) => {
        console.log(result);
        alert("deleted");
        getProgress();
      }).catch((err) => {

      });
  }
  useEffect(() => {
    getProgress();
  }, [])

  return (
    <>
      <Box>
        <Box>
          <TopBar />
        </Box>
        <Box>
          <Flex>
            <Box width={'200px'}><SideBar /></Box>
            <Box width={'84%'}>
              <MainArea />
              <Box>
                <Box width={'100%'} border={'1px solid gray'} borderRadius={'5px'} m={1} p={2} >
                  <Flex justifyContent={'space-between'}>
                    <Box><Heading size={'md'}>Progress Page</Heading></Box>
                    <Spacer />
                    <Box><Button onClick={onOpen}>Add Progress</Button></Box>
                  </Flex>
                </Box>
                <Box width={'100%'} height={"700px"} border={'1px solid gray'} borderRadius={'5px'} m={1} p={2}>
                  <TableContainer>
                    <Table variant='striped' colorScheme='teal' border={'1px solid gray'}>
                      <TableCaption>All users Data list</TableCaption>
                      <Thead>
                        <Tr>
                          <Th>Sr No</Th>
                          <Th>Active Users</Th>
                          <Th>Art Work</Th>
                          <Th>Artist</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {
                          progress?.map((ele, ind) => (
                            <Tr key={ele.id}>
                              <Td>{ind + 1}</Td>
                              <Td>{ele.active_user}K+</Td>
                              <Td>{ele.artwork}K+</Td>
                              <Td>{ele.artist}K+</Td>
                              <Td>
                                <Button onClick={()=>{handleDelete(ele._id)}} variant='outline' size='xs' colorScheme='red'><DeleteIcon /></Button>&nbsp;
                                
                              </Td>
                            </Tr>
                          ))
                        }
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <AddProgress onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default Progress