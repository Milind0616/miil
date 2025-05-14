import React, { useState, useEffect, useContext } from 'react';
import { Box, Heading, Text, Image, Button, Stack, SimpleGrid } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddToCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/signin');
        }
    }, [isAuth, navigate]);

    useEffect(() => {
        // Fetch cart items from localStorage or API
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <Box p={5}>
            <Heading mb={5}>Your Cart</Heading>
            {cartItems.length === 0 ? (
                <Text>Your cart is empty.</Text>
            ) : (
                <SimpleGrid columns={[1, 2, 3]} spacing={5}>
                    {cartItems.map((item, index) => (
                        <Card
                            key={index}
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src={item.image}
                                alt={item.name}
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>{item.name}</Heading>

                                    <Text py='2'>
                                        Price: ${item.price}
                                    </Text>
                                </CardBody>

                                <CardFooter>
                                    <Button variant='solid' colorScheme='red' onClick={() => handleRemoveItem(index)}>
                                        Remove
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    ))}
                </SimpleGrid>
            )}
            {cartItems.length > 0 && (
                <Box textAlign='center' mt={10}>
                    <Button
                        size='md'
                        height='48px'
                        width='200px'
                        border='2px'
                        borderColor='green.500'
                        colorScheme='green'
                    >
                        Checkout
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default AddToCart;