import React from 'react';
import { Image, Heading, Text, Button, Box, Flex } from '@chakra-ui/react';

const Poster = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }} // Responsive direction
      position="relative"
      mt="3em"
      w="100%"
      bg='#FBCE20'
    >
      <Box
        p="2em"
        bg="#FBCE20"
        flex="1" // Ensures equal spacing
        textAlign={{ base: 'center', md: 'left' }} // Center text on small screens
      >
        <Heading>Growing your collection? We’ve got your...</Heading>
        <Text fontSize="xl">You’re protected by the eBay Money Back Guarantee.</Text>
        <Button
          variant="outline"
          colorScheme="#592E13"
          borderRadius="30px"
          mt="2em"
          // Ensure button stays centered on smaller screens
          alignSelf={{ base: 'center', md: 'flex-start' }}
        >
          Shop Collectibles
        </Button>
      </Box>
      <Box
        boxSize={{ base: '100%', md: '95%' }} // Responsive box size
        mt={{ base: '2em', md: '0' }} // Margin top for smaller screens
        flex="1" // Ensures equal spacing
      >
        <Image
          src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/KA0AAOSwKZhmQglh/$_57.PNG"
          boxSize="100%"
          objectFit="cover" // Ensure the image covers the box size
        />
      </Box>
    </Flex>
  );
};

export default Poster;
