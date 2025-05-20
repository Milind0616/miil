import React from 'react'
import StartNavbar from '../components/StartNavbar'
import MiddleNavbar from '../components/MiddleNavbar'
import { Link, Box, Flex, Heading, Image, Container, SimpleGrid, Card, Stack, CardBody, Text, Spacer, Button, Divider, ButtonGroup, CardFooter } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function DailyDeals() {
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

    return (
        <>
            <StartNavbar />
            <MiddleNavbar />
            <hr />
            <Box background={'#F9F9F9'}>
                {/*down navbar  */}
                <Box px={"7em"} display="flex" alignItems="center" justifyContent={"space-between"} >
                    <Heading size={'lg'}> Deals</Heading>
                    <Box display={"flex"} alignItems={"center"} gap={"2em"} >

                        {/* Feature */}
                        <Menu>
                            <MenuButton>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    Featured
                                </Box>
                            </MenuButton>
                            <MenuList >
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Home & Garden</MenuItem>
                                        <MenuItem>Business & Industrial</MenuItem>
                                        <MenuItem>Collectibles</MenuItem>
                                        <MenuItem>Fashion</MenuItem>
                                        <MenuItem>Electronics</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Lifestyle</MenuItem>
                                        <MenuItem>Parts & Accessories</MenuItem>
                                        <MenuItem>Videogames and Consoles</MenuItem>
                                        <MenuItem>Smartphones & Smartwatches</MenuItem>
                                        <MenuItem>Men's Shoes</MenuItem>
                                    </Box>
                                </Box>

                            </MenuList>
                        </Menu>

                        {/* Tech */}
                        <Menu>
                            <MenuButton>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                  Tech
                                </Box>
                            </MenuButton>
                            <MenuList >
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Laptops & Netbooks</MenuItem>
                                        <MenuItem>Cameras & Photo</MenuItem>
                                        <MenuItem>TV, Video & Home Audio</MenuItem>
                                        <MenuItem>iPads, Tablets & eReaders</MenuItem>
                                        <MenuItem>Video Games & Consoles</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Phone Cases & Accessories</MenuItem>
                                        <MenuItem>Vehicle Electronics & GPS</MenuItem>
                                        <MenuItem>Memory Drives & Storage</MenuItem>
                                        <MenuItem>Printers & Printer Supplies</MenuItem>
                                        <MenuItem>Headphones & Portable Audio</MenuItem>
                                    </Box>
                                </Box>

                            </MenuList>
                        </Menu>

                        {/* Fashion */}
                        <Menu>
                            <MenuButton>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    Fashion
                                </Box>
                            </MenuButton>
                            <MenuList >
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Fine Jewelry</MenuItem>
                                        <MenuItem>Fashion Jewelry</MenuItem>
                                        <MenuItem>Beauty</MenuItem>
                                        <MenuItem>Health</MenuItem>
                                        <MenuItem>Men's Shoes & Accessories</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Women's Shoes & Accessories</MenuItem>
                                        <MenuItem>Handbags and accessories</MenuItem>
                                        <MenuItem>Men's Clothing</MenuItem>
                                        <MenuItem>Women's Clothing</MenuItem>
                                        <MenuItem>Kid's Stuff</MenuItem>
                                    </Box>
                                </Box>

                            </MenuList>
                        </Menu>

                        {/* Home */}
                        <Menu>
                            <MenuButton>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    Home
                                </Box>
                            </MenuButton>
                            <MenuList >
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Sporting Goods</MenuItem>
                                        <MenuItem>Yard, Garden & Outdoor Living</MenuItem>
                                        <MenuItem>Cycling</MenuItem>
                                        <MenuItem>Home Improvement</MenuItem>
                                        <MenuItem>Kitchen, Dining & Bar</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Toys</MenuItem>
                                        <MenuItem>Outdoor Sports</MenuItem>
                                        <MenuItem>Tools</MenuItem>
                                        <MenuItem>Inside the Home</MenuItem>
                                        <MenuItem>Exercise & Fitness</MenuItem>
                                    </Box>
                                </Box>

                            </MenuList>
                        </Menu>

                        {/* More */}
                        <Menu>
                            <MenuButton>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    More
                                </Box>
                            </MenuButton>
                            <MenuList >
                                <Box display={"flex"} gap={"2em"}>
                                    <Box>
                                        <MenuItem >Coins</MenuItem>
                                        <MenuItem>Collectibles</MenuItem>
                                        <MenuItem>Toys</MenuItem>
                                        <MenuItem>Musical Instruments & Gear</MenuItem>
                                        <MenuItem>Travel</MenuItem>
                                    </Box>
                                    <Box>
                                        <MenuItem>Sports Fan Shop</MenuItem>
                                        <MenuItem>Office Furniture & Supplies</MenuItem>
                                        <MenuItem>Automotive</MenuItem>
                                        <MenuItem>Business & Industrial</MenuItem>
                                        
                                    </Box>
                                </Box>

                            </MenuList>
                        </Menu>

                        {/* Cart Icon */}
                       
                      
                    </Box>
                   
                </Box>

                {/* banner */}
                <Box boxSize={'95%'} paddingLeft={'5em'}>
                    <Image src='https://i.ebayimg.com/00/s/MTAwWDEyMDA=/z/F3QAAOSwxt5mPJcr/$_57.JPG' alt='banner' />
                </Box>

                {/* spot Light */}
                <Box boxSize={"88%"} margin={"auto"} boxShadow='xs' p='auto' rounded='md' bg='white' marginTop={'1em'} >
                    <Text fontSize={'2xl'} margin={'0.5em'} style={{ textAlign: 'center' }}>SPOTLIGHT DEAL</Text>
                    <hr />

                    <Flex margin={'2em'} justifyContent={'space-around'}>
                        <Box boxSize={'45%'} >
                            <Image src='https://i.ebayimg.com/images/g/OscAAOSw33JlQYIR/s-l400.jpg' />
                        </Box>
                        <Box boxSize={'50%'} >
                            <Link style={{ fontSize: '2em' }}>Motorola One 5G UW Ace - 64GB Gray (Factory Unlocked) NEW SEALED</Link>
                            <Spacer />
                            <Text as={'b'} fontSize={'2xl'}>US $94.99</Text>
                        </Box>
                    </Flex>
                </Box>

                {/* Featured deals */}
                <Box boxSize={'88%'} margin={'auto'} boxShadow='xs' p='auto' rounded='md' bg='white' marginTop={'1em'} marginBottom={'1em'}>
                    <Text fontSize={'2xl'} style={{ textAlign: 'center' }}  >FEATURED DEALS</Text>
                </Box>

                {/* cards */}
                <Box boxSize={'88%'} margin={'auto'} marginTop={'1em'}>
                    <SimpleGrid columns={[1, 2, 3]} spacing={5}>
                        {products.map((product, index) => (
                            <Card maxW='sm' key={index}>
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
                </Box>

                {/* Footer */}
                <Box marginTop={'3em'} marginBottom={'2em'} background={'white'}>

                    <Flex display="flex" justifyContent="space-between" borderTop={"1px solid gray"} py={"2em"} px={'3em'}>
                        <Link>AbouteBay</Link>
                        <Link>Announcements</Link>
                        <Link>Community</Link>
                        <Link>Security Center</Link>
                        <Link>Seller Information Center</Link>
                        <Link>Policies</Link>
                        <Link>Affiliates</Link>
                        <Link>Help & Contact</Link>
                        <Link>Site Map</Link>
                    </Flex>
                    <Text style={{ color: 'grey' }} px={'3em'}>Copyright © 1995-2024 eBay Inc.
                        All Rights Reserved. Accessibility,
                        User Agreement, Privacy, Payments Terms of Use,
                        Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice</Text>
                </Box>

            </Box>
        </>
    )
}

export default DailyDeals