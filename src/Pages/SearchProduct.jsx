import React from 'react';
import { Box, SimpleGrid, Text, Image, Flex, Heading, Button, Divider, Stack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import StartNavbar from '../components/StartNavbar';
import MiddleNavbar from '../components/MiddleNavbar';
import Footer from '../components/Footer';
import { Card, CardBody, CardFooter, ButtonGroup } from '@chakra-ui/react';

function SearchProduct() {
    const location = useLocation();
    const { filteredProducts } = location.state || { filteredProducts: [] };

    const handleAddToCart = (item) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const isItemInCart = cartItems.some(cartItem => cartItem.name === item.name);

        if (isItemInCart) {
            alert(`${item.name} is already in the cart!`);
        } else {
            cartItems.push(item);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert(`${item.name} has been added to the cart!`);
        }
    };

    return (
        <>
            <StartNavbar />
            <MiddleNavbar />
            <Box p={5} backgroundColor="#F9F9F9">
                <Heading size="lg" mb={4} textAlign="center">Search Results</Heading>
                {filteredProducts.length > 0 ? (
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
                        {filteredProducts.map((product, index) => (
                            <Card maxW='sm' key={index} boxShadow="md" borderRadius="lg">
                                <CardBody>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{product.name}</Heading>
                                        <Text>{product.description}</Text>
                                        <Text color='blue.600' fontSize='2xl'>
                                            ${product.price}
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                            Buy now
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue' onClick={() => handleAddToCart(product)}>
                                            Add to cart
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        ))}
                    </SimpleGrid>
                ) : (
                    <Text textAlign="center" fontSize="lg" color="gray.600">No products found matching your search.</Text>
                )}
            </Box>
            <Footer />
        </>
    );
}

export default SearchProduct;