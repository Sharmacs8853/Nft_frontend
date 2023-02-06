import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import MainArea from '../components/MainArea/MainArea'
import SideBar from '../components/SideBar/SideBar'
import TopBar from '../components/TopBar/TopBar'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
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

const Contacts = () => {
    const [contact, setContact] = useState([]);

    //==========for making table pdf ================
    const columns = [
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Mobile", field: "phone" },
        { title: "Subject", field: "subject" },
        { title: "Message", field: "msg" },
    ]

    //============= get all the contact here ============
    const getContact = () => {
        axios.get(`https://nft-backend-app.onrender.com/contact/get`)
            .then((result) => {
                console.log(result.data);
                setContact(result.data);
            }).catch((err) => {
                console.log('not found', err);
            });
    }

    //==============PDF function =======================
    const downloadPdf = () => {
        const doc = new jsPDF();
        doc.text('Contact Details', 20, 10);
        doc.autoTable({
            columns: columns.map(col => ({ ...col, dataKey: col.field })),
            body: contact
        })
        doc.save('contact_table.pdf');
    }
    //================ delete contact function =============
    const handleDelete = (id) =>{
        axios.delete(`https://nft-backend-app.onrender.com/contact/${id}`)
        .then((result) => {
            console.log("result", result);
            alert("deleted");    
            getContact()
        }).catch((err) => {
            console.log('err', err);
        });
    }

    //=============use effect ==============================
    useEffect(() => {
        getContact();
    }, [])
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
                        <Box>
                            <Box width={'100%'} border={'1px solid gray'} borderRadius={'5px'} m={1} p={2} >
                                <Flex justifyContent={'space-between'}>
                                    <Box><Heading size={'md'}>Contacts Page</Heading></Box>
                                    <Spacer />
                                    <Box><Button onClick={() => downloadPdf()}>Print PDF</Button></Box>
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
                                                <Th>Mobile</Th>
                                                <Th>Subject</Th>
                                                <Th>Message</Th>
                                                <Th>Actions</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                contact?.map((ele, ind) => (
                                                    <Tr key={ele._id}>
                                                        <Td>{ind + 1}</Td>
                                                        <Td>{ele.name}</Td>
                                                        <Td>{ele.email}</Td>
                                                        <Td>{ele.phone}</Td>
                                                        <Td>{ele.subject}</Td>
                                                        <Td>{ele.msg}</Td>
                                                        <Td>
                                                            <Button onClick={()=>handleDelete(ele._id)} variant='outline' size='xs' colorScheme='red'><DeleteIcon /></Button>&nbsp;
                                                            <Button variant='outline' size='xs' colorScheme='green'><EditIcon /></Button>&nbsp;
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

    )
}

export default Contacts