import React from 'react';
import { Flex, Box, Link, Text, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

function StartNavbar() {
    const navigate = useNavigate();

    const clickRes = () => {
        navigate("/register");
    };

    const clickSign = () => {
        navigate("/signin");
    };

    const clickDailyDeals = () => {
        navigate("/dailydeals");
    };

    const clickHelpContact = () => {
        navigate('/help&contact');
    };

    const clickSell = () => {
        navigate('/sell');
    };

    return (
        <Box boxSize={'95%'} paddingLeft={{ base: '1em', md: '5em' }}>
            <Flex px={{ base: 2, md: 10 }} alignItems="center" justifyContent="space-between">
                <Box display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent="space-between" gap={4}>
                    <Text>Hi!</Text>
                    <Link color={'blue'} onClick={clickSign}> Sign in</Link>
                    <Text>or</Text>
                    <Link color={'blue'} onClick={clickRes}> register</Link>
                    <Link onClick={clickDailyDeals}>Daily Deals</Link>
                    <Link onClick={clickHelpContact}>Help & Contact</Link>
                    <Link onClick={clickSell}>Gift&Cards</Link>
                </Box>
                <Box display={{ base: 'none', md: 'flex' }} gap={4}>
                    <Menu>
                        <MenuButton transition='all 0.2s'>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                Watchlist
                                <IoIosArrowDown />
                            </Box>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Please <Link color={'blue'} href=''>sign in</Link> to view items you are watching.</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                My eBay
                                <IoIosArrowDown />
                            </Box>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Summary</MenuItem>
                            <MenuItem>Recently Viewed</MenuItem>
                            <MenuItem>Bids/Offers</MenuItem>
                            <MenuItem>Watchlist</MenuItem>
                            <MenuItem>Purchase History</MenuItem>
                            <MenuItem>Buy Again</MenuItem>
                            <MenuItem>Selling</MenuItem>
                            <MenuItem>Saved Searches</MenuItem>
                            <MenuItem>Saved Sellers</MenuItem>
                            <MenuItem>Message</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={IconButton} aria-label='Profile' icon={<FaRegUser />} bg={"white"} _hover={{ bg: 'white' }} onClick={() => navigate('/profile')} />
                    </Menu>
                    <Menu>
                        <MenuButton as={IconButton} aria-label='Options' icon={<FaRegBell />} bg={"white"} _hover={{ bg: 'white' }} />
                    </Menu>
                    <Menu>
                        <MenuButton as={IconButton} aria-label='Options' icon={<BsCart2 />} _hover={{ color: '#3665F3', bg: 'white' }} bg={'white'} onClick={() => navigate('/addtocart')} />
                    </Menu>
                </Box>
            </Flex>
        </Box>
    );
}

export default StartNavbar;