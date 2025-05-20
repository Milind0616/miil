import React from "react";
import { 
  Container, Flex, Heading, Link, Input, Button, HStack, Divider, 
  Box, SimpleGrid, Text, VStack, Icon, Card 
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart, FaBoxOpen, FaUser, FaUndo, FaCheck, FaClipboardList } from "react-icons/fa";
import StartNavbar from "../components/StartNavbar";
import MiddleNavbar from "../components/MiddleNavbar";
import Footer from "../components/Footer";

const helpCategories = [
  { icon: FaShoppingCart, label: "Buying" },
  { icon: FaBoxOpen, label: "Selling" },
  { icon: FaUser, label: "Account" },
  { icon: FaUndo, label: "Returns and refunds" },
  { icon: FaCheck, label: "Shipping and tracking" },
];

const HelpContact = () => {
  return (
    <>
      <StartNavbar />
      <MiddleNavbar />

      <Container maxW="container.xl" py={8}>
        {/* Breadcrumb */}
        <Text fontSize="sm" color="gray.500" mb={4}>
          <Link href="/">Home</Link> <span>{'>'}</span> <Link href="#">Help & Contact</Link>
        </Text>

        {/* Page Heading */}
        <Heading as="h1" size="xl" mb={6}>
          Help & Contact
        </Heading>

        {/* Search Bar */}
        <Flex mb={6} alignItems="center">
          <Input placeholder="Search help articles" size="lg" borderRadius="md" />
          <Button ml={2} colorScheme="blue" size="lg">
            <SearchIcon />
          </Button>
        </Flex>

        {/* Help Categories (Split into Columns) */}
        <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={8}>
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="md">Buying</Heading>
            <Link href="#">Getting started</Link>
            <Link href="#">Payment methods</Link>
            <Link href="#">Managing orders</Link>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading as="h2" size="md">Selling</Heading>
            <Link href="#">Creating a listing</Link>
            <Link href="#">Shipping and handling</Link>
            <Link href="#">Resolving issues</Link>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading as="h2" size="md">Account</Heading>
            <Link href="#">Managing account settings</Link>
            <Link href="#">Security & privacy</Link>
            <Link href="#">Resolving disputes</Link>
          </VStack>
        </SimpleGrid>

        <Divider my={8} />

        {/* Popular Help Articles */}
        <Heading as="h2" size="lg" mb={4}>
          Popular Help Articles
        </Heading>
        <VStack align="start" spacing={3}>
          <Link href="#">How to return an item</Link>
          <Link href="#">Understanding buyer protection</Link>
          <Link href="#">Changing your password</Link>
          <Link href="#">Resolving payment issues</Link>
        </VStack>

        {/* Browse Help Articles */}
        <Box maxW="6xl" mx="auto" py={10} textAlign="center">
          <Text fontSize="xl" fontWeight="bold" mb={6}>
            Browse help articles
          </Text>
          <SimpleGrid columns={[1, 2, 3,4,5,6]} spacing={6}>
            {helpCategories.map((item, index) => (
              <Card
                key={index}
                p={6}
                textAlign="center"
                cursor="pointer"
                _hover={{ shadow: "md", transform: "scale(1.05)", transition: "0.2s" }}
              >
                <VStack spacing={3}>
                  <Icon as={item.icon} boxSize={6} color="gray.700" />
                  <Text fontSize="md" fontWeight="medium">{item.label}</Text>
                </VStack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default HelpContact;