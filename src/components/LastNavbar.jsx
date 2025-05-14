import React from 'react';
import { Flex, Box, Link, Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LastNavbar = () => {
    const navigate = useNavigate();

    const clickSaved = () => {
        navigate('/signin');
    };

    return (
        <Flex
            border="1px solid"
            px={{ base: 2, md: 10 }} // Adjust padding based on screen size
            py={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ base: 'column', md: 'row' }} // Stack items vertically on small screens
        >
            {/* Saved Link */}
            <Box px={{ base: 2, md: 0 }} mb={{ base: 4, md: 0 }}> {/* Adjust padding and margin based on screen size */}
                <Link onClick={clickSaved}>Saved</Link>
            </Box>

            {/* Electronics */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                           px={{ base: 2, md: 0 }}
                           mb={{ base: 4, md: 0 }}
                    >
                        Electronics
                    </Box>
                </MenuButton>
                <MenuList>
                    <Box display={{ base: 'block', md: 'flex' }}>
                        <Box>
                            <Box>
                                <MenuItem as="b">Most popular categories</MenuItem>
                                <hr />
                                <MenuItem>Smartphones and accessories</MenuItem>
                                <MenuItem>Video games and consoles</MenuItem>
                                <MenuItem>Computers and tablets</MenuItem>
                                <MenuItem>Cameras and photos</MenuItem>
                                <MenuItem>Cameras and drones</MenuItem>
                                <MenuItem>Refurbished</MenuItem>
                                <MenuItem>Smart home</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <MenuItem as="b">More categories</MenuItem>
                                <hr />
                                <MenuItem>Apple</MenuItem>
                                <MenuItem>Samsung</MenuItem>
                                <MenuItem>Portable audio and headphones</MenuItem>
                                <MenuItem>Smart watches</MenuItem>
                                <MenuItem>Deals</MenuItem>
                                <MenuItem>Sell on eBay</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Image marginTop={{ base: '1em', md: '0.5em' }}
                            borderRadius="1em"
                             src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"
                             width={{ base: '100%', md: 'auto' }} />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>


            {/* Motors */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                     px={{ base: 2, md: 0 }}
                     mb={{ base: 4, md: 0 }}
                     >
                        Motors
                    </Box>
                </MenuButton>
                <MenuList>
                    <Box  display={{ base: 'block', md: 'flex' }}>
                        <Box>
                            <Box>
                                <MenuItem as="b">Car</MenuItem>
                                <hr />
                                <MenuItem>Auto and truck parts</MenuItem>
                                <MenuItem>Tools and supplies</MenuItem>
                                <MenuItem>Turbo chargers</MenuItem>
                                <MenuItem>Clothing and merchandise</MenuItem>
                                <MenuItem>Shock absorbers</MenuItem>
                                <MenuItem>Electronic and GPS</MenuItem>
                                <MenuItem>Air intake</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <MenuItem as="b">Motorcycle and more</MenuItem>
                                <hr />
                                <MenuItem>Motorcycle parts</MenuItem>
                                <MenuItem>Body and frame</MenuItem>
                                <MenuItem>Engines and parts</MenuItem>
                                <MenuItem>Accessories</MenuItem>
                                <MenuItem>Exhausts and systems</MenuItem>
                                <MenuItem>Rims</MenuItem>
                                <MenuItem>Deals</MenuItem>
                                <MenuItem>Sell on eBay</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Image marginTop={{ base: '1em', md: '0.5em' }}
                            borderRadius="1em"
                             width={{ base: '100%', md: 'auto' }} src="https://ir.ebaystatic.com/cr/v/c01/ROW-19399_Fallback_PandA_770x270.png" />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>

            {/* Fashion */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                     px={{ base: 2, md: 0 }}
                     mb={{ base: 4, md: 0 }}
                     >
                        Fashion
                    </Box>
                </MenuButton>
                <MenuList>
                    <Box  display={{ base: 'block', md: 'flex' }}>
                        <Box>
                            <Box>
                                <MenuItem as="b">Most popular categories</MenuItem>
                                <hr />
                                <MenuItem>Footwear</MenuItem>
                                <MenuItem>Women's clothing</MenuItem>
                                <MenuItem>Footwear for women</MenuItem>
                                <MenuItem>Men's clothing</MenuItem>
                                <MenuItem>Men's footwear</MenuItem>
                                <MenuItem>Watches</MenuItem>
                                <MenuItem>Jewelry</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <MenuItem as="b">More categories</MenuItem>
                                <hr />
                                <MenuItem>Accessories for men</MenuItem>
                                <MenuItem>Accessories for women</MenuItem>
                                <MenuItem>Bags and wallets for women</MenuItem>
                                <MenuItem>Women's sunglasses</MenuItem>
                                <MenuItem>Men's sunglasses</MenuItem>
                                <MenuItem>Sneakers</MenuItem>
                                <MenuItem>Deals</MenuItem>
                                <MenuItem>Sell on eBay</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Image marginTop={{ base: '1em', md: '0.5em' }}
                            borderRadius="1em"
                             width={{ base: '100%', md: 'auto' }} 
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19393_Fallback_Moda_770x270.png" />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>

            {/* Collectibles and Art */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                     px={{ base: 2, md: 0 }}
                     mb={{ base: 4, md: 0 }}
                     >
                        Collectibles and Art
                    </Box>
                </MenuButton>
                <MenuList>
                    <Box  display={{ base: 'block', md: 'flex' }}>
                        <Box>
                            <Box>
                                <MenuItem as="b">Most popular categories</MenuItem>
                                <hr />
                                <MenuItem>Collectibles</MenuItem>
                                <MenuItem>Art</MenuItem>
                                <MenuItem>Cartoon characters</MenuItem>
                                <MenuItem>Movie and TV characters</MenuItem>
                                <MenuItem>Diecast</MenuItem>
                                <MenuItem>Refurbished</MenuItem>
                                <MenuItem>Musical memorabilia</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <MenuItem as="b">More categories</MenuItem>
                                <hr />
                                <MenuItem>Sports memorabilia</MenuItem>
                                <MenuItem>Trading card games</MenuItem>
                                <MenuItem>Antiques</MenuItem>
                                <MenuItem>Comics</MenuItem>
                                <MenuItem>Funko pop</MenuItem>
                                <MenuItem>Star Wars</MenuItem>
                                <MenuItem>Deals</MenuItem>
                                <MenuItem>Sell on eBay</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Image  marginTop={{ base: '1em', md: '0.5em' }}
                            borderRadius="1em"
                             width={{ base: '100%', md: 'auto' }} 
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19397_Fallback_Collectibles_770x270.png" />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>

            {/* Sports */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                     px={{ base: 2, md: 0 }}
                     mb={{ base: 4, md: 0 }}
                     >
                        Sports
                    </Box>
                </MenuButton>
                <MenuList>
                    <Box  display={{ base: 'block', md: 'flex' }}>
                        <Box>
                            <Box>
                                <MenuItem as="b">Most popular categories</MenuItem>
                                <hr />
                                <MenuItem>Cycling</MenuItem>
                                <MenuItem>Fitness, running and yoga</MenuItem>
                                <MenuItem>Fitness Tech</MenuItem>
                                <MenuItem>Fishing</MenuItem>
                                <MenuItem>Camping</MenuItem>
                                <MenuItem>Scooters</MenuItem>
                                <MenuItem>Team sports</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <MenuItem as="b">More categories</MenuItem>
                                <hr />
                                <MenuItem>Water sports</MenuItem>
                                <MenuItem>Winter sports</MenuItem>
                                <MenuItem>Box and MMA</MenuItem>
                                <MenuItem>Swimming</MenuItem>
                                <MenuItem>GPS & Running Watches</MenuItem>
                                <MenuItem>Garmin</MenuItem>
                                <MenuItem>Deals</MenuItem>
                                <MenuItem>Sell on eBay</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Image  marginTop={{ base: '1em', md: '0.5em' }}
                            borderRadius="1em"
                             width={{ base: '100%', md: 'auto' }} 
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19396_Fallback_Sports_and_Leisure_770x270.png" />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>

            {/* Health & Beauty */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                     px={{ base: 2, md: 0 }}
                     mb={{ base: 4, md: 0 }}
                     >
                        Health & Beauty
                    </Box>
                </MenuButton>
                <MenuList>
                    <Box  display={{ base: 'block', md: 'flex' }}>
                        <Box>
                            <Box>
                                <MenuItem as="b">Most popular categories</MenuItem>
                                <hr />
                                <MenuItem>Makeup</MenuItem>
                                <MenuItem>Health</MenuItem>
                                <MenuItem>K-Beauty</MenuItem>
                                <MenuItem>Manicure and pedicure</MenuItem>
                                <MenuItem>Hair products</MenuItem>
                                <MenuItem>Skin products</MenuItem>
                                <MenuItem>Orthopedic products</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <MenuItem as="b">More categories</MenuItem>
                                <hr />
                                <MenuItem>Vitamins and food supplements</MenuItem>
                                <MenuItem>Shaving and waxing</MenuItem>
                                <MenuItem>Bath and personal hygiene</MenuItem>
                                <MenuItem>Oral hygiene</MenuItem>
                                <MenuItem>Massagers</MenuItem>
                                <MenuItem>Deals</MenuItem>
                                <MenuItem>Sell on eBay</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Image  marginTop={{ base: '1em', md: '0.5em' }}
                            borderRadius="1em"
                             width={{ base: '100%', md: 'auto' }} 
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19394_Fallback_Health_Beauty_770x270.png" />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>

            {/* Industrial equipment */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                     px={{ base: 2, md: 0 }}
                     mb={{ base: 4, md: 0 }}
                     >
                        Industrial equipment
                    </Box>
                </MenuButton>
                <MenuList>
                    <Box  display={{ base: 'block', md: 'flex' }}>
                        <Box>
                            <Box>
                                <MenuItem as="b">Most popular categories</MenuItem>
                                <hr />
                                <MenuItem>Dental healthcare</MenuItem>
                                <MenuItem>Electronic equipment and supplies</MenuItem>
                                <MenuItem>Metallurgy and manufacturing</MenuItem>
                                <MenuItem>Motors and industrial automation</MenuItem>
                                <MenuItem>Heavy equipment parts</MenuItem>
                                <MenuItem>Light industrial tools</MenuItem>
                                <MenuItem>Inspection, measurement and testing equipment</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <MenuItem as="b">More categories</MenuItem>
                                <hr />
                                <MenuItem>Packing and shipping</MenuItem>
                                <MenuItem>Office supplies and equipment</MenuItem>
                                <MenuItem>Printing and graphic arts</MenuItem>
                                <MenuItem>Restaurants and food service</MenuItem>
                                <MenuItem>Maintenance and safety</MenuItem>
                                <MenuItem>Retail and services</MenuItem>
                                <MenuItem>Deals</MenuItem>
                                <MenuItem>Sell on eBay</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Image  marginTop={{ base: '1em', md: '0.5em' }}
                            borderRadius="1em"
                             width={{ base: '100%', md: 'auto' }} 
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19398_Fallback_IndustrialEquipment_770x270.png" />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>

            {/* Home & Garden */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                     px={{ base: 2, md: 0 }}
                     mb={{ base: 4, md: 0 }}
                     >
                        Home & Garden
                    </Box>
                </MenuButton>
                <MenuList>
                    <Box  display={{ base: 'block', md: 'flex' }}>
                        <Box>
                            <Box>
                                <MenuItem as="b">Most popular categories</MenuItem>
                                <hr />
                                <MenuItem>Workshop Tools and Equipment</MenuItem>
                                <MenuItem>Patio, garden and outdoors</MenuItem>
                                <MenuItem>Home improvement</MenuItem>
                                <MenuItem>Kitchen, dining and bar</MenuItem>
                                <MenuItem>Lamps, lights and fans</MenuItem>
                                <MenuItem>Interior decoration</MenuItem>
                                <MenuItem>Home organization</MenuItem>
                                <MenuItem>Home appliances</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <MenuItem as="b">More categories</MenuItem>
                                <hr />
                                <MenuItem>Toys</MenuItem>
                                <MenuItem>Pets</MenuItem>
                                <MenuItem>Crafts</MenuItem>
                                <MenuItem>Art supplies</MenuItem>
                                <MenuItem>Musical instruments</MenuItem>
                                <MenuItem>Jewelry and beads</MenuItem>
                                <MenuItem>Deals</MenuItem>
                                <MenuItem>Sell on eBay</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Image  marginTop={{ base: '1em', md: '0.5em' }}
                            borderRadius="1em"
                     width={{ base: '100%', md: 'auto' }} 
                            src="https://ir.ebaystatic.com/cr/v/c01/ROW-19395_Fallback_Home_Garden_770x270.png" />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>

            {/* Deals */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                     px={{ base: 2, md: 0 }}
                     mb={{ base: 4, md: 0 }}>

                        Deals
                    </Box>
                </MenuButton>
            </Menu>

            {/* Sell */}
            <Menu>
                <MenuButton>
                    <Box display="flex" alignItems="center" justifyContent="space-between"
                     px={{ base: 2, md: 0 }}
                     mb={{ base: 4, md: 0 }}
                     >
                        Sell
                    </Box>
                </MenuButton>
                <MenuList>
                    <Box  display={{ base: 'block', md: 'flex' }}>
                        <Box marginTop="1em">
                            <Box>
                                <hr />
                                <MenuItem>How to create a listing</MenuItem>
                                <MenuItem>Join our growth program</MenuItem>
                                <MenuItem>Seller center</MenuItem>
                                <MenuItem>Seller updates</MenuItem>
                                <MenuItem>Seller customer service</MenuItem>
                                <MenuItem>eBay managed payments</MenuItem>
                                <MenuItem>Smart home</MenuItem>
                            </Box>
                        </Box>
                        <Box marginTop="1em">
                            <Box>
                                <hr />
                                <MenuItem>Learn to sell</MenuItem>
                                <MenuItem>eBay stores</MenuItem>
                                <MenuItem>eBay fees</MenuItem>
                                <MenuItem>Selling limits</MenuItem>
                            </Box>
                        </Box>
                        <Box>
                            <Image  marginTop={{ base: '1em', md: '0.5em' }}
                            borderRadius="1em"
                             width={{ base: '100%', md: 'auto' }} 
                            src="https://ir.ebaystatic.com/cr/v/c1/ROW-19400_Fallback_Sell_770x270_ROW.png" />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default LastNavbar;
