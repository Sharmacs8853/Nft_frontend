import React, { useState } from 'react'
import { Box, Button, Heading, Input, Stack, Textarea } from '@chakra-ui/react'
import contact_style from './Contact.module.css'
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

let initailData = {
    "name": "",
    "email": "",
    "phone": "",
    "subject": "",
    "msg": ""
}

const Contact = () => {
    const [formData, setFornData] = useState(initailData);
    let { name, email, phone, subject, msg } = formData;
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFornData({...formData, [name]: value})
    }
    const postContact = (data) =>{
        axios.post(`http://localhost:9000/contact/post`, data)
        .then((result) => {
            console.log('result', result);
            alert('thanks for connect')
        }).catch((err) => {
            console.log('err', err);
        });
    }
    const handleSubmit = (event)=>{
        
        postContact(formData)
        setFornData(initailData)
    }
    return (
        <>
            <Box className={contact_style.container1}>
                <Navbar />
                <Box className={contact_style.container}>

                    <Box className={contact_style.contact_div}>
                        <form onSubmit={handleSubmit}>
                            <Stack>
                                <Box textAlign={'center'}>
                                    <Heading>Contact Us</Heading>
                                </Box>
                                <Box>
                                    <label>Name</label>
                                    <Input name='name' value={name} onChange={handleChange} placeholder='Enter your Full name ' />
                                </Box>
                                <Box>
                                    <label>Email</label>
                                    <Input name='email' value={email}  onChange={handleChange}placeholder='Enter Email' />
                                </Box>
                                <Box>
                                    <label>Phone No</label>
                                    <Input name='phone' value={phone} onChange={handleChange} placeholder='9878757624' />
                                </Box>
                                <Box>
                                    <label>Subject</label>
                                    <Input name='subject' value={subject} onChange={handleChange} placeholder='Subject' />
                                </Box>
                                <Box>
                                    <label>Message</label>
                                    <Textarea name='msg' value={msg} onChange={handleChange}></Textarea>
                                </Box>
                                <Box>
                                    <Button type='submit'>Submit</Button>
                                </Box>
                            </Stack>
                        </form>
                    </Box>
                </Box>
            </Box>

        </>

    )
}

export default Contact