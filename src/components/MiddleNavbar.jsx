import React, { useState } from 'react';
import {
    Flex, Box, Image, Input, Button, Text, SimpleGrid
} from '@chakra-ui/react';
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function MiddleNavbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();
    const products = [
        {
            name: 'Samsung Galaxy S10+ G975U 128GB Factory',
            description: 'High-quality smartphone with advanced features.',
            price: 172.99,
            image: 'https://i.ebayimg.com/images/g/nu0AAOSwruBhHjjq/s-l225.jpg',
            category: 'Electronics'
        },
        {
            name: 'Samsung Galaxy S21 5G Unlocked G991U 128GB',
            description: 'Latest smartphone with 5G connectivity.',
            price: 173.00,
            image: 'https://i.ebayimg.com/images/g/IFUAAOSwQk9jcpV~/s-l225.jpg',
            category: 'Electronics'
        },
        {
            name: 'Clarks Mens Un Hugh Cap Black Leather Dress',
            description: 'Stylish and comfortable leather dress shoes.',
            price: 54.99,
            image: 'https://i.ebayimg.com/images/g/HGQAAOSwMMBmBqFi/s-l225.jpg',
            category: 'Fashion'
        },
        {
            name: 'Puma Playmaker Pro Mid Splatter Mens Black',
            description: 'Durable and trendy sports shoes.',
            price: 53.99,
            image: 'https://i.ebayimg.com/images/g/MugAAOSwJWBlPAVZ/s-l225.jpg',
            category: 'Fashion'
        },
        {
            name: 'UA Under Armour Men\'s Velocity Tee Top Athletic',
            description: 'Comfortable and lightweight athletic tee.',
            price: 20.53,
            image: 'https://i.ebayimg.com/images/g/OzsAAOSwqjBkjjGt/s-l225.jpg',
            category: 'Fashion'
        },
        {
            name: 'Apple AirPods Pro (2nd Generation) Gen 2 - USB',
            description: 'High-quality wireless earbuds with noise cancellation.',
            price: 149.99,
            image: 'https://i.ebayimg.com/images/g/ywMAAOSwDLljl75S/s-l225.jpg',
            category: 'Electronics'
        },
        {
            name: 'Samsung Galaxy S22 SM-S901U1 Factory Unlocked',
            description: 'Advanced smartphone with excellent performance.',
            price: 239.99,
            image: 'https://i.ebayimg.com/images/g/cmoAAOSwqGpmW1o9/s-l225.jpg',
            category: 'Electronics'
        },
        {
            name: 'HP 17-CN3165CL 17.3" HD+ Touch Laptop Intel',
            description: 'Powerful laptop with a large touch display.',
            price: 549.00,
            image: 'https://i.ebayimg.com/images/g/S7EAAOSw6ttlW7gG/s-l225.jpg',
            category: 'Electronics'
        },
        {
            name: 'Cobra Golf Club AeroJet 15* 3 Wood Stiff Graphite',
            description: 'Premium golf club for professional players.',
            price: 144.99,
            image: 'https://i.ebayimg.com/images/g/9WwAAOSwOAZmFv~s/s-l225.jpg',
            category: 'Sports'
        },
        {
            name: 'BenQ TK700 3200-Lumen 4K UHD DLP Projector',
            description: 'High-resolution projector for home and office use.',
            price: 849.00,
            image: 'https://i.ebayimg.com/images/g/5jkAAOSwz5Nj-P72/s-l225.jpg',
            category: 'Electronics'
        },
        {
            name: 'TaylorMade Golf Club STEALTH 2 16.5* 3HL',
            description: 'High-performance golf club for enthusiasts.',
            price: 174.99,
            image: 'https://i.ebayimg.com/images/g/EWMAAOSwQdRmDcU5/s-l225.jpg',
            category: 'Sports'
        },
        {
            name: 'Seagate Exos X20 20TB 7200 SATA 6Gb/s 3.5"',
            description: 'Reliable and spacious storage solution.',
            price: 215.00,
            image: 'https://i.ebayimg.com/images/g/HD0AAOSwaSVlWR6p/s-l225.jpg',
            category: 'Electronics'
        }
    ];

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            alert('Please enter a search query.');
            return;
        }

        const lowerCaseQuery = searchQuery.toLowerCase();
        const results = products.filter(product =>
            product.name.toLowerCase().includes(lowerCaseQuery) ||
            product.category.toLowerCase().includes(lowerCaseQuery)
        );

        if (results.length === 0) {
            alert('No products found matching your search.');
        } else {
            navigate('/searchProduct', { state: { filteredProducts: results } });
        }
    };

    return (
        <Box w={{ base: "100%", md: "95%" }} px={{ base: 2, md: 10 }} pt={1}>
            <Flex px={10} py={1} alignItems="center" justifyContent="space-between">

                {/* Ebay Logo */}
                <Image
                    maxW={{ base: "80px", md: "120px" }}
                    src="http://www.w3.org/2000/svg"
                    alt="Ebay Logo"
                />

                {/* Search with all categories */}
                <Box position="relative" w={{ base: "100%", md: '50%' }} display="flex" alignItems="center" borderRadius="full" boxShadow="lg" bg="gray.100" p={2}>
                    <IoSearchOutline style={{ position: "absolute", left: "20px", color: "gray" }} size={24} />
                    <Input 
                        placeholder="Search for anything" 
                        border="none" 
                        pl="50px" 
                        _focus={{ outline: "none" }} 
                        bg="transparent"
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                </Box>

                {/* Search button */}
                <Button 
                    backgroundColor='#3665F3' 
                    color="white" 
                    _hover={{ bg: '#3665F3' }} 
                    size="lg" 
                    m={3} 
                    px={{ base: 3, md: 10 }} 
                    onClick={handleSearch}
                >
                    Search
                </Button>

            </Flex>

            {/* Display search results */}
            {filteredProducts.length > 0 && (
                <Box mt={4}>
                    <Text fontSize="lg" fontWeight="bold">Search Results:</Text>
                    <SimpleGrid columns={[1, 2, 3]} spacing={5} mt={4}>
                        {filteredProducts.map((product, index) => (
                            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                                <Image src={product.image} alt={product.name} />
                                <Text fontWeight="bold" mt={2}>{product.name}</Text>
                                <Text>{product.description}</Text>
                                <Text color="blue.600" fontWeight="bold">${product.price}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            )}
        </Box>
    )
}

export default MiddleNavbar;
