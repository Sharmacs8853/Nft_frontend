import React, { useEffect } from 'react'
import { Box, Button, Flex, Heading, Spacer, useDisclosure } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersData } from '../redux/userReducer/action';
import { AddUsers } from '../components/chakraModal/users/AddUsers';
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
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import SideBar from '../components/SideBar/SideBar';
import MainArea from '../components/MainArea/MainArea';
import TopBar from '../components/TopBar/TopBar';

const Users = () => {
  const users = useSelector((store) => store.userReducer.users);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const getData = () => {
    dispatch(getUsersData());
  }

  useEffect(() => {
    getData();
  }, [])
  console.log("users", users);
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
                    <Box><Heading size={'md'}>Users Page</Heading></Box>
                    <Spacer />
                    <Box><Button onClick={onOpen}>Add Users</Button></Box>
                  </Flex>
                </Box>
                <Box width={'100%'} height={"700px"} border={'1px solid gray'} borderRadius={'5px'} m={1} p={2}>
                  <TableContainer>
                    <Table variant='striped' colorScheme='teal' border={'1px solid gray'}>
                      <TableCaption>All users Data list</TableCaption>
                      <Thead>
                        <Tr>
                          <Th>Sr No</Th>
                          <Th>Name</Th>
                          <Th>Email</Th>
                          <Th>Actions</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {
                          users.map((user, ind) => (
                            <Tr key={user.id}>
                              <Td>{ind + 1}</Td>
                              <Td>{user.name}</Td>
                              <Td>{user.email}</Td>
                              <Td>
                                <Button variant='outline' size='xs' colorScheme='red'><DeleteIcon /></Button>&nbsp;
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
      <AddUsers onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default Users