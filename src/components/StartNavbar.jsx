import React, { useState } from 'react';
import { Flex, Box, Link, Text, Menu, MenuButton, MenuList, MenuItem, IconButton, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function StartNavbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Box boxSize={'95%'} paddingLeft={{ base: '1em', md: '5em' }}>
            <Flex px={{ base: 2, md: 10 }} alignItems="center" justifyContent="space-between">
                {/* Desktop Menu */}
                <Box display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent="space-between" gap={4}>
                    <Text>Hi!</Text>
                    <Link color={'blue'} onClick={clickSign}> Sign in</Link>
                    <Text>or</Text>
                    <Link color={'blue'} onClick={clickRes}> register</Link>
                    <Link onClick={clickDailyDeals}>Daily Deals</Link>
                    <Link onClick={clickHelpContact}>Help & Contact</Link>
                    <Link onClick={clickSell}>Gift&Cards</Link>
                </Box>
                {/* Desktop Icons */}
                <Box display={{ base: 'none', md: 'flex' }} gap={4}>
                    <Menu>
                        <MenuButton as={IconButton} aria-label='Profile' icon={<FaRegUser />} bg={"white"} _hover={{ bg: 'white' }} onClick={() => navigate('/profile')} />
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
                {/* Burger Icon for Mobile */}
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={toggleMenu}
                    variant="ghost"
                />
            </Flex>
            {/* Mobile Menu */}
            <Box display={{ base: isOpen ? 'block' : 'none', md: 'none' }} mt={2} px={2}>
                <Stack spacing={4}>
                    <Text>Hi!</Text>
                    <Link color={'blue'} onClick={clickSign}> Sign in</Link>
                    <Text>or</Text>
                    <Link color={'blue'} onClick={clickRes}> register</Link>
                    <Link onClick={clickDailyDeals}>Daily Deals</Link>
                    <Link onClick={clickHelpContact}>Help & Contact</Link>
                    <Link onClick={clickSell}>Gift&Cards</Link>
                    <Flex gap={4} mt={2}>
                        <IconButton aria-label='Profile' icon={<FaRegUser />} bg={"white"} _hover={{ bg: 'white' }} onClick={() => navigate('/profile')} />
                        <IconButton aria-label='Options' icon={<FaRegBell />} bg={"white"} _hover={{ bg: 'white' }} />
                        <IconButton aria-label='Cart' icon={<BsCart2 />} _hover={{ color: '#3665F3', bg: 'white' }} bg={'white'} onClick={() => navigate('/addtocart')} />
                    </Flex>
                </Stack>
            </Box>
        </Box>
    );
}

export default StartNavbar;