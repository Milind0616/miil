import React, { useState, useEffect, useContext } from 'react';
import { Box, Heading, Text, Image, Button, Stack, SimpleGrid } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import StartNavbar from '../components/StartNavbar';
import MiddleNavbar from '../components/MiddleNavbar';

const AddToCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = localStorage.getItem('isAuth');
        if (!isAuth) {
            navigate('/signin');
        }
    }, [navigate]);

    useEffect(() => {
        // Fetch cart items for the logged-in user only
        const isAuth = localStorage.getItem('isAuth');
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // If cart items are stored as [{userEmail, ...product}], filter by user
        const userCartItems = storedCartItems.filter(item => item.userEmail === isAuth);
        setCartItems(userCartItems);
    }, []);

    const handleRemoveItem = (index) => {
        const isAuth = localStorage.getItem('isAuth');
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // Remove from only the logged-in user's cart
        const userCartItems = storedCartItems.filter(item => item.userEmail === isAuth);
        const updatedUserCartItems = userCartItems.filter((_, i) => i !== index);
        // Merge with other users' cart items
        const otherUsersCartItems = storedCartItems.filter(item => item.userEmail !== isAuth);
        const updatedCartItems = [...otherUsersCartItems, ...updatedUserCartItems];
        setCartItems(updatedUserCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const handleCheckout = () => {
        const isAuth = localStorage.getItem('isAuth');
        const bill = {
            date: new Date().toLocaleString(),
            items: cartItems,
            total: cartItems.reduce((acc, item) => acc + Number(item.price), 0).toFixed(2),
        };
        // Save bill to localStorage (append if bills exist), associating with user
        const bills = JSON.parse(localStorage.getItem('bills')) || [];
        bills.push({ userEmail: isAuth, bill });
        localStorage.setItem('bills', JSON.stringify(bills));
        // Remove only this user's cart items
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = storedCartItems.filter(item => item.userEmail !== isAuth);
        setCartItems([]);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        // Redirect to profile
        navigate('/profile');
    };

    return (
        <>
            <StartNavbar />
            <MiddleNavbar />
            <Box minH="80vh" px={{ base: 2, md: 10 }} py={8} bgGradient="linear(to-br, white, blue.50)">
                <Heading mb={8} textAlign="center" color="#3665F3" fontWeight="extrabold" letterSpacing={1.5} fontSize={{ base: '2xl', md: '3xl' }}>Your Shopping Cart</Heading>
                {cartItems.length === 0 ? (
                    <Box textAlign="center" py={20}>
                        <Image src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty Cart" mx="auto" boxSize="120px" opacity={0.5} mb={4} />
                        <Text fontSize="xl" color="gray.500">Your cart is empty.</Text>
                        <Button mt={6} colorScheme="blue" onClick={() => navigate('/')}>Continue Shopping</Button>
                    </Box>
                ) : (
                    <Box>
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
                            {cartItems.map((item, index) => (
                                <Card
                                    key={index}
                                    borderRadius="2xl"
                                    boxShadow="lg"
                                    bg="white"
                                    _hover={{ boxShadow: '2xl', transform: 'scale(1.03)' }}
                                    transition="all 0.2s"
                                >
                                    <Image
                                        objectFit='cover'
                                        maxH='180px'
                                        w="100%"
                                        src={item.image}
                                        alt={item.name}
                                        borderTopRadius="2xl"
                                    />
                                    <CardBody>
                                        <Heading size='md' mb={2} color="#3665F3">{item.name}</Heading>
                                        <Text color="gray.600" mb={2}>{item.description || 'No description available.'}</Text>
                                        <Text fontWeight="bold" color="green.600" fontSize="lg">${item.price}</Text>
                                    </CardBody>
                                    <CardFooter justifyContent="center">
                                        <Button variant='outline' colorScheme='red' onClick={() => handleRemoveItem(index)}>
                                            Remove
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </SimpleGrid>
                        <Box mt={10} maxW="400px" mx="auto" bg="white" p={6} borderRadius="xl" boxShadow="md">
                            <Heading size="md" mb={4} color="#3665F3">Order Summary</Heading>
                            <Stack spacing={2}>
                                <Text>Total Items: <b>{cartItems.length}</b></Text>
                                <Text>Total Price: <b style={{ color: '#16a34a' }}>${cartItems.reduce((acc, item) => acc + Number(item.price), 0).toFixed(2)}</b></Text>
                            </Stack>
                            <Button
                                size='lg'
                                colorScheme='green'
                                w="100%"
                                mt={6}
                                fontWeight="bold"
                                fontSize="lg"
                                onClick={handleCheckout}
                            >
                                Checkout
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default AddToCart;