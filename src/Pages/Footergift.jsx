import { Box, Flex, Link, Text, Stack, Divider, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const bg = useColorModeValue('white', 'gray.900');
  const linkColor = useColorModeValue('blue.600', 'blue.300');
  const sectionLinks1 = [
    'About eBay', 'Announcements', 'Community', 'Security Center', 'Seller Center', 'Policies', 'Affiliates', 'Help & Contact', 'Site Map'
  ];
  const sectionLinks2 = [
    'Accessibility', 'User Agreement', 'Privacy', 'Consumer Health Data', 'Payments Terms of Use', 'Cookies', 'CA Privacy Notice', 'Your Privacy Choices', 'AdChoice'
  ];

  return (
    <Box bg={bg} color="gray.700" fontSize="sm" py={10} px={2} mt={16} w="100%" boxShadow="md" borderTopRadius="2xl">
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" maxW="7xl" mx="auto" gap={8}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6} align="center">
          {sectionLinks1.map((text, i) => (
            <Link key={i} href="#" _hover={{ color: linkColor, textDecoration: 'underline' }} fontWeight="medium">{text}</Link>
          ))}
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6} align="center">
          {sectionLinks2.map((text, i) => (
            <Link key={i} href="#" color={linkColor} _hover={{ color: 'blue.400', textDecoration: 'underline' }} fontWeight="medium">{text}</Link>
          ))}
        </Stack>
      </Flex>
      <Divider my={6} />
      <Text color="gray.500" fontSize="xs" textAlign="center">
        Copyright &copy; 1995-{new Date().getFullYear()} eBay Inc. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
