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
    "tagline": ""
}

const AddTagline = ({ onOpen, isOpen, onClose }) => {
    const [formData, setFormData] = useState(initailData);
    let { tagline } = formData;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const postTaglineData = (data) =>{
        axios.post(`https://nft-backend-app.onrender.com/tagline/post`, data)
        .then((result) => {
            console.log('result', result);
            alert('added successfully')
            onClose()
        }).catch((err) => {
            console.log("err", err);
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        postTaglineData(formData)
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
                        <ModalHeader>Add Tagline</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Tgaline</FormLabel>
                                <Input name='tagline' value={tagline} onChange={handleChange} placeholder='Enter Your Name' />
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

export default AddTagline