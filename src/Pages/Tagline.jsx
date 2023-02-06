import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Heading, Spacer, useDisclosure } from '@chakra-ui/react'
import MainArea from '../components/MainArea/MainArea'
import SideBar from '../components/SideBar/SideBar'
import TopBar from '../components/TopBar/TopBar';
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
import AddTagline from '../components/chakraModal/Tagline/AddTagline';

const Tagline = () => {
    const [tagline, setTagline] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const getTagline = () => {
        axios.get(`https://nft-backend-app.onrender.com/tagline/get`)
            .then((result) => {
                //console.log(result.data);
                setTagline(result.data);
            }).catch((err) => {
                console.log('not found', err);
            });
    }
    const handleDelete = (id) =>{
        axios.delete(`https://nft-backend-app.onrender.com/tagline/${id}`)
        .then((result) => {
            console.log(result);
            alert("deleted")   
            getTagline()
        }).catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        getTagline();
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
                                        <Box><Heading size={'md'}>Tagline Page</Heading></Box>
                                        <Spacer />
                                        <Box><Button onClick={onOpen}>Add Tagline</Button></Box>
                                    </Flex>
                                </Box>
                                <Box width={'100%'} height={"700px"} border={'1px solid gray'} borderRadius={'5px'} m={1} p={2}>
                                    <TableContainer>
                                        <Table variant='striped' colorScheme='teal' border={'1px solid gray'}>
                                            <TableCaption>All users Data list</TableCaption>
                                            <Thead>
                                                <Tr>
                                                    <Th>Sr No</Th>
                                                    <Th>Tagline</Th>
                                                    <Th>Actions</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {
                                                    tagline?.map((ele, ind) => (
                                                        <Tr key={ele.id}>
                                                            <Td>{ind + 1}</Td>
                                                            <Td>{ele.tagline}</Td>
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
            <AddTagline onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        </>
    )
}

export default Tagline