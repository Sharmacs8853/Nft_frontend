import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import axios from 'axios';

let initailData = {
    "name": "",
    "email": "",
    "password": ""
}

function AddUsers({ onOpen, isOpen, onClose }) {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [formData, setFormData] = useState(initailData);
    let { name, email, password } = formData;

    //==========handle change function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    //============post users data function =============
    const postUserData = (data) =>{
        axios.post(`https://nft-backend-app.onrender.com/admin/signup`, data)
        .then((result) => {
            console.log('result', result);
            alert('added successfully')
            onClose()
        }).catch((err) => {
            console.log("err", err);
        });
    }

    // ============== form submition ========
    const handleSubmit = (event) =>{
        event.preventDefault();
        postUserData(formData)
        setFormData(initailData)
    }

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <form onSubmit={handleSubmit}>
                    <ModalContent>
                        <ModalHeader>Add Users</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input name='name' value={name} onChange={handleChange} placeholder='Enter Your Name' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input name='email' value={email} onChange={handleChange} placeholder='Emter Your Email' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input name='password' value={password} onChange={handleChange} placeholder='Enter Your Password' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button type='submit' colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}

export { AddUsers }