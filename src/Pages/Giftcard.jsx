import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, Heading, Text, Button, Image, Stack, SimpleGrid, useDisclosure, Collapse, IconButton, Divider, List, ListItem, UnorderedList, useBreakpointValue, useColorModeValue, Center } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Footergift from "./Footergift";

const Giftcard = () => {
    const carddata = [
        {
            title: 'Birthday',
            url: 'https://ir.ebaystatic.com/cr/v/c01/giftcardweb/110123/media/categories/cat-birthday.jpg'
        },
        {
            title: 'Aniverssary',
            url: 'https://ir.ebaystatic.com/cr/v/c01/giftcardweb/110123/media/categories/cat-anniversary.jpg'
        },
        {
            title: 'New Baby',
            url: 'https://ir.ebaystatic.com/cr/v/c01/giftcardweb/110123/media/categories/cat-new-baby.jpg'
        },
        {
            title: 'Anytime',
            url: 'https://ir.ebaystatic.com/cr/v/c01/giftcardweb/110123/media/categories/cat-anytime.jpg'
        },
        {
            title: 'Thank you',
            url: 'https://ir.ebaystatic.com/cr/v/c01/giftcardweb/110123/media/categories/cat-thank-you.jpg'
        },
        {
            title: 'Congratulation',
            url: 'https://ir.ebaystatic.com/cr/v/c01/giftcardweb/110123/media/categories/cat-congrats.jpg'
        },
        {
            title: 'Things they love',
            url: 'https://ir.ebaystatic.com/cr/v/c01/giftcardweb/110123/media/categories/cat-things-they-love.jpg'
        }
    ];

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const shopRef = useRef();
    const workingRef = useRef();
    const faqsRef = useRef();
    const buyNowRef = useRef(null); // Ref for the sliding div

    const [isActiveShop, setIsActiveShop] = useState(false);
    const [isActiveWork, setIsActiveWork] = useState(false);
    const [isActiveFaqs, setIsActiveFaqs] = useState(false);
    const [isActiveFaqsbox, setIsActiveFaqsBox] = useState(false);
    const [IsActiveTerms, setIsActiveTerms] = useState(false);
    const [isBuyNowOpen, setIsBuyNowOpen] = useState(false); // State for sliding div
    const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card

    const toggleClassShop = () => {
        setIsActiveShop(!isActiveShop);
        setIsActiveWork(false);
        setIsActiveFaqs(false);
    };
    const toggleClassWork = () => {
        setIsActiveWork(!isActiveWork);
        setIsActiveShop(false);
        setIsActiveFaqs(false);
    };
    const toggleClassFaqs = () => {
        setIsActiveFaqs(!isActiveFaqs);
        setIsActiveShop(false);
        setIsActiveWork(false);
    };

    const toggleBoxFaqs = () => {
        setIsActiveFaqsBox(!isActiveFaqsbox);
    };

    const toggleBoxTerms = () => {
        setIsActiveTerms(!IsActiveTerms);
    };

    const toggleBuyNow = (card = null) => {
        setSelectedCard(card); // Set the selected card
        setIsBuyNowOpen(!isBuyNowOpen); // Toggle the state
    };

    // Close the div when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buyNowRef.current && !buyNowRef.current.contains(event.target)) {
                setIsBuyNowOpen(false); // Close the div
            }
        };

        if (isBuyNowOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isBuyNowOpen]);

    function scrollToShop() {
        toggleClassShop();
        shopRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    }

    function scrollToWorking() {
        toggleClassWork();
        workingRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    }

    function scrollToFAQs() {
        toggleClassFaqs();
        faqsRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    }

    const sliderCardSize = useBreakpointValue({ base: 160, sm: 200, md: 220, lg: 240 });
    const cardBg = useColorModeValue('white', 'gray.800');
    const sectionBg = useColorModeValue('blue.50', 'gray.900');
    const accent = useColorModeValue('#3665F3', 'blue.300');

    return (
        <Box bgGradient="linear(to-br, white, blue.50)" minH="100vh" w="100%">
            <Box px={{ base: 2, md: 10 }} py={6}>
                <Flex align="center" justify="space-between" mb={8}>
                    <Heading color={accent} fontWeight="extrabold" fontSize={{ base: '2xl', md: '3xl' }}>eBay eGift Cards</Heading>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                        <Button variant={isActiveShop ? 'solid' : 'outline'} colorScheme="blue" onClick={scrollToShop}>Shop</Button>
                        <Button variant={isActiveWork ? 'solid' : 'outline'} colorScheme="blue" onClick={scrollToWorking}>How it works</Button>
                        <Button variant={isActiveFaqs ? 'solid' : 'outline'} colorScheme="blue" onClick={scrollToFAQs}>FAQs</Button>
                        <Button colorScheme="green" onClick={() => toggleBuyNow()}>Buy Now</Button>
                    </Stack>
                </Flex>

                {/* Sliding Buy Now Panel */}
                <Collapse in={isBuyNowOpen} animateOpacity>
                    <Box ref={buyNowRef} pos="fixed" top={0} right={0} h="100vh" w={{ base: '100vw', md: '400px' }} bg={cardBg} boxShadow="2xl" zIndex={30} borderLeftRadius="xl" p={8} transition="all 0.2s">
                        <Flex justify="space-between" align="center" mb={4}>
                            <Heading size="md">{selectedCard ? `Buy ${selectedCard.title} eGift Card` : 'Buy eBay eGift Cards'}</Heading>
                            <IconButton icon={<CloseIcon />} onClick={() => toggleBuyNow()} aria-label="Close" />
                        </Flex>
                        <Text color="gray.600" mb={6}>Choose your amount and personalize your eGift card for any occasion!</Text>
                        {/* Add more purchase UI here if needed */}
                    </Box>
                </Collapse>

                {/* Banner Section */}
                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" bg={sectionBg} borderRadius="2xl" p={8} mb={10} boxShadow="lg">
                    <Box flex={1} mb={{ base: 6, md: 0 }}>
                        <Text color="blue.700" fontWeight="bold" fontSize="lg">eBay eGift Cards</Text>
                        <Heading size="2xl" color={accent} mb={2}>Win at gifting with eBay eGift Cards</Heading>
                        <Text fontSize="lg" color="gray.700" mb={4}>Spoil them with choice on any occasion with heartwarming designs and hassle-free redemption.</Text>
                        <Button colorScheme="blue" variant="solid" size="lg">Start gifting</Button>
                    </Box>
                    <Image src="https://ir.ebaystatic.com/cr/v/c01/giftcardweb/110123/media/banners/banner-overview-top-d2-v1.jpg" alt="eBay Gift Card Banner" borderRadius="xl" boxSize={{ base: '100%', md: '350px' }} objectFit="cover" />
                </Flex>

                {/* Features Section */}
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={12}>
                    <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md" textAlign="center" _hover={{ boxShadow: 'xl', transform: 'scale(1.03)' }} transition="all 0.2s">
                        <Heading size="md" color={accent} mb={2}>Hassle-free</Heading>
                        <Text color="gray.600">eGift Cards are digitally delivered fast and are easy to use, with no fees or expiration date.</Text>
                    </Box>
                    <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md" textAlign="center" _hover={{ boxShadow: 'xl', transform: 'scale(1.03)' }} transition="all 0.2s">
                        <Heading size="md" color={accent} mb={2}>Heartwarming designs</Heading>
                        <Text color="gray.600">Choose a design from a wide range of themes for every occasion.</Text>
                    </Box>
                    <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md" textAlign="center" _hover={{ boxShadow: 'xl', transform: 'scale(1.03)' }} transition="all 0.2s">
                        <Heading size="md" color={accent} mb={2}>The choice is theirs</Heading>
                        <Text color="gray.600">eGift Cards can be redeemed for almost any item on eBay.com.</Text>
                    </Box>
                </SimpleGrid>

                {/* Card Carousel Section */}
                <Box ref={shopRef} mb={14}>
                    <Heading size="lg" color={accent} mb={4}>Celebrate upcoming occasions</Heading>
                    <Box px={2}>
                        <Slider {...settings}>
                            {carddata.map((d, index) => (
                                <Box key={index} p={2} textAlign="center" cursor="pointer" onClick={() => toggleBuyNow(d)}>
                                    <Image src={d.url} alt={d.title} borderRadius="lg" boxSize={`${sliderCardSize}px`} objectFit="cover" boxShadow="md" mx="auto" _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }} transition="all 0.2s" />
                                    <Text mt={2} fontWeight="semibold" color="gray.700">{d.title}</Text>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Box>

                {/* Gift-giving Section */}
                <Box mb={14}>
                    <Heading size="lg" color={accent} mb={4}>eGift Cards for all kinds of gift-giving</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md" _hover={{ boxShadow: 'xl', transform: 'scale(1.03)' }} transition="all 0.2s">
                            <Heading size="md" color={accent} mb={2}>Delight with a wide, one-of-a-kind selection</Heading>
                            <Text color="gray.600">From authenticated fashion and luxury items, to expertly checked electronics—we've got it all.</Text>
                        </Box>
                        <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md" _hover={{ boxShadow: 'xl', transform: 'scale(1.03)' }} transition="all 0.2s">
                            <Heading size="md" color={accent} mb={2}>Help the collector in your life pursue their passion</Heading>
                            <Text color="gray.600">Whether they're building a deck of legendary trading cards or copping the latest sneaker release, eBay is where they'll find their community.</Text>
                        </Box>
                    </SimpleGrid>
                </Box>

                {/* How it Works Section */}
                <Box ref={workingRef} mb={14}>
                    <Heading size="lg" color={accent} mb={4}>Redeeming is easy</Heading>
                    <Text color="gray.600" mb={4}>Plus, you can <Button variant="link" colorScheme="blue" size="sm">check your balance here</Button></Text>
                    <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
                        <Box bg="gray.50" borderRadius="3xl" p={8} flex={1} boxShadow="md">
                            <Heading size="md" color={accent} mb={4}>How it works</Heading>
                            <Stack spacing={6}>
                                <Flex align="center" gap={4}>
                                    <Center bg="blue.600" color="white" borderRadius="full" boxSize={10} fontWeight="bold">1</Center>
                                    <Box>
                                        <Heading size="sm" color={accent}>Find your item</Heading>
                                        <Text color="gray.600">Your eBay eGift Card can only be redeemed at eBay.com</Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={4}>
                                    <Center bg="blue.600" color="white" borderRadius="full" boxSize={10} fontWeight="bold">2</Center>
                                    <Box>
                                        <Heading size="sm" color={accent}>Enter the code</Heading>
                                        <Text color="gray.600">At checkout, enter the redemption code in the Gift cards, coupons and eBay bucks section.</Text>
                                    </Box>
                                </Flex>
                                <Flex align="center" gap={4}>
                                    <Center bg="blue.600" color="white" borderRadius="full" boxSize={10} fontWeight="bold">3</Center>
                                    <Box>
                                        <Heading size="sm" color={accent}>Confirm and pay</Heading>
                                        <Text color="gray.600">Confirm your payment and enjoy your purchase.</Text>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>
                        <Box flex={1} display="flex" alignItems="center" justifyContent="center">
                            <Box borderRadius="3xl" overflow="hidden" boxShadow="md" w="100%">
                                <video autoPlay loop muted style={{ width: '100%', borderRadius: '1.5rem' }}>
                                    <source src="/video/work.mp4" type="video/mp4" />
                                </video>
                            </Box>
                        </Box>
                    </Flex>
                </Box>

                {/* Bulk Banner Section */}
                <Flex align="center" justify="center" bgImage="url('https://ir.ebaystatic.com/cr/v/c01/giftcardweb/110123/media/banners/banner-overview-bottom-d2-v1.jpg')" bgSize="cover" borderRadius="2xl" minH="220px" mb={14} boxShadow="lg">
                    <Stack color="white" spacing={2} p={8} align="flex-start">
                        <Heading size="lg">Buy eBay eGift Cards in bulk</Heading>
                        <Text fontSize="lg">Celebrate success, reward customers, and more.</Text>
                        <Button colorScheme="whiteAlpha" variant="outline" size="md">Shop Now</Button>
                        <Text fontSize="sm">Powered by Launch Gift Cards, Inc.</Text>
                    </Stack>
                </Flex>

                {/* FAQ Section */}
                <Box ref={faqsRef} mb={8}>
                    <Button onClick={toggleBoxFaqs} variant="ghost" colorScheme="blue" mb={2} fontWeight="bold">FAQ</Button>
                    <Collapse in={isActiveFaqsbox} animateOpacity>
                        <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                            <Heading size="sm" color={accent} mb={2}>What can gift cards be used for?</Heading>
                            <Text color="gray.600" mb={2}>eBay gift cards can be used to buy almost anything on eBay.com. They may not be used to buy other eBay gift cards, third party gift cards, gift certificates, coupons, coins, paper money, virtual currency, or items generally considered to be "bullion" (for example, gold, silver, and other precious metals in the form of coins, bars, or ingots). Not refundable or redeemable for cash unless required by law. Items purchased with eBay Gift Cards must be shipped to the U.S. Full terms and conditions apply.</Text>
                            <Heading size="sm" color={accent} mb={2}>Do I need an eBay account to use an eBay gift card?</Heading>
                            <Text color="gray.600" mb={2}>You need an eBay account registered in the U.S. and a U.S. shipping address to use an eBay gift card. You can create an eBay account at any time.</Text>
                            <Heading size="sm" color={accent} mb={2}>Does my gift card expire?</Heading>
                            <Text color="gray.600" mb={2}>Your eBay gift card does not expire and there are no fees.</Text>
                            <Heading size="sm" color={accent} mb={2}>What if my order total is less than the amount of my eBay gift card?</Heading>
                            <Text color="gray.600" mb={2}>After using your eBay gift card, any remaining balance is attached to your eBay account. To redeem the remaining balance, select your gift card from gift cards, coupons, and eBay bucks at checkout.</Text>
                            <Heading size="sm" color={accent} mb={2}>If you are having trouble with your eBay gift card, review these troubleshooting steps or to contact us.</Heading>
                            <Text color="gray.600">Need more help? Visit <Button variant="link" colorScheme="blue" size="sm">eBay Gift Cards FAQs</Button></Text>
                        </Box>
                    </Collapse>
                </Box>

                {/* Terms Section */}
                <Box mb={8}>
                    <Button onClick={toggleBoxTerms} variant="ghost" colorScheme="blue" mb={2} fontWeight="bold">Terms & Conditions</Button>
                    <Collapse in={IsActiveTerms} animateOpacity>
                        <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                            <Text color="gray.600">Read the eBay <Button variant="link" colorScheme="blue" size="sm">Gift Cards Terms and Conditions</Button></Text>
                        </Box>
                    </Collapse>
                </Box>

                {/* Scam Protection Section */}
                <Box mb={14}>
                    <Heading size="lg" color={accent} mb={4}>How can I protect myself from gift card scams and fraud?</Heading>
                    <Text color="gray.600" mb={2}>To make sure your eBay Gift Card codes are safe from scammers, follow these tips:</Text>
                    <UnorderedList color="gray.600" pl={6} mb={2}>
                        <ListItem>Your eBay Gift Card can only be redeemed at checkout on eBay.com.</ListItem>
                        <ListItem>Never give or send your eBay Gift Card code to anyone outside of eBay.com checkout. That’s a scam.</ListItem>
                        <ListItem>Do not use your Gift Card to pay anyone outside of the eBay platform.</ListItem>
                        <ListItem>If you think you’ve been targeted by a Gift Card scam, Contact eBay Customer Service immediately.</ListItem>
                    </UnorderedList>
                    <Text color="blue.600" fontWeight="bold" cursor="pointer">Learn more about Gift Card Scams.</Text>
                </Box>

                <Footergift />
            </Box>
        </Box>
    );
};

export default Giftcard;