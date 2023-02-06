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
    "active_user":null,
    "artwork":null,
    "artist":null
}

const AddProgress = ({ onOpen, isOpen, onClose }) => {
    const [formData, setFormData] = useState(initailData);
    let {active_user, artwork, artist } = formData;

    //==========handle change function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    //============post progress data function =============
    const postProgressData = (data) =>{
        axios.post(`https://nft-backend-app.onrender.com/progress/post`, data)
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
        postProgressData(formData)
        setFormData(initailData)
    }
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <form onSubmit={handleSubmit}>
                    <ModalContent>
                        <ModalHeader>Add Progress</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Active users</FormLabel>
                                <Input type='number' name='active_user' value={active_user}  onChange={handleChange} placeholder='Enter Your Active users' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Art Work</FormLabel>
                                <Input type='number' name='artwork' value={artwork} onChange={handleChange} placeholder='Enter Your art work' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Artist</FormLabel>
                                <Input type='number' name='artist' value={artist}  onChange={handleChange} placeholder='Enter Your artist' />
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

export default AddProgress