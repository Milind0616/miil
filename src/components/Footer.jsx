import React from 'react';
import { Heading, Text, Link, Flex, Box, Stack } from '@chakra-ui/react';
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <Box bg="#F7F7F7" mt="4em">
      <Flex
        // Responsive padding and direction
        px={{ base: 1, md: 8 }}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        borderTop="1px solid gray"
        py="1em"
      >
        {/* Footer Buy section */}
        <Box mb={{ base: 4, md: 0 }}> {/* Adjust bottom margin for responsiveness */}
          <Heading size="md"><Link>Buy</Link></Heading>
          <Stack spacing={2}> {/* Stack for consistent spacing */}
            <Text fontSize='md'><Link>Registration</Link></Text>
            <Text fontSize='md'><Link>eBay Money Back Guarantee</Link></Text>
            <Text fontSize='md'><Link>Bidding & buying help</Link></Text>
            <Text fontSize='md'><Link>Stores</Link></Text>
          </Stack>
        </Box>

        {/* Sell and Tool apps */}
        <Box mb={{ base: 4, md: 0 }}> {/* Adjust bottom margin for responsiveness */}
          <Stack spacing={8}> {/* Stack for consistent spacing */}
            <Box>
              <Heading size="md"><Link>Sell</Link></Heading>
              <Stack spacing={2}> {/* Stack for consistent spacing */}
                <Text fontSize='md'><Link>Start selling</Link></Text>
                <Text fontSize='md'><Link>Learn to sell</Link></Text>
                <Text fontSize='md'><Link>Affiliates</Link></Text>
              </Stack>
            </Box>
            <Box>
              <Heading size="md"><Link>Tools & apps</Link></Heading>
              <Stack spacing={2}> {/* Stack for consistent spacing */}
                <Text fontSize='md'><Link>Developers</Link></Text>
                <Text fontSize='md'><Link>Security center</Link></Text>
                <Text fontSize='md'><Link>Site map</Link></Text>
              </Stack>
            </Box>
          </Stack>
        </Box>

        {/* Stay connected */}
        <Box mb={{ base: 4, md: 0 }}> {/* Adjust bottom margin for responsiveness */}
          <Heading size="md"><Link>Stay connected</Link></Heading>
          <Stack spacing={2}> {/* Stack for consistent spacing */}
            <Text fontSize='md'><Link>eBay's Blogs</Link></Text>
            <Box>
              <Stack direction="row" align="center" spacing={2}> {/* Stack for consistent spacing */}
                <FaFacebookSquare />
                <Link fontSize='md'>Facebook</Link>
              </Stack>
              <Stack direction="row" align="center" spacing={2}> {/* Stack for consistent spacing */}
                <FaTwitterSquare />
                <Link fontSize='md'>Twitter</Link>
              </Stack>
            </Box>
          </Stack>
        </Box>

        {/* About eBay */}
        <Box mb={{ base: 4, md: 0 }}> {/* Adjust bottom margin for responsiveness */}
          <Heading size="md"><Link>About eBay</Link></Heading>
          <Stack spacing={2}> {/* Stack for consistent spacing */}
            <Text fontSize='md'><Link>Company info</Link></Text>
            <Text fontSize='md'><Link>News</Link></Text>
            <Text fontSize='md'><Link>Investors</Link></Text>
            <Text fontSize='md'><Link>Careers</Link></Text>
            <Text fontSize='md'><Link>Government relations</Link></Text>
            <Text fontSize='md'><Link>Advertise with us</Link></Text>
            <Text fontSize='md'><Link>Policies</Link></Text>
            <Text fontSize='md'><Link>Verified Rights Owner (VeRO) Program</Link></Text>
          </Stack>
        </Box>

        {/* Help & Contact, Community, eBay Sites */}
        <Box>
          <Stack spacing={8}> {/* Stack for consistent spacing */}
            <Box>
              <Heading size="md"><Link>Help & Contact</Link></Heading>
              <Stack spacing={2}> {/* Stack for consistent spacing */}
                <Text fontSize='md'><Link>Seller Information Center</Link></Text>
                <Text fontSize='md'><Link>Contact us</Link></Text>
              </Stack>
            </Box>
            <Box>
              <Heading size="md"><Link>Community</Link></Heading>
              <Stack spacing={2}> {/* Stack for consistent spacing */}
                <Text fontSize='md'><Link>Announcements</Link></Text>
                <Text fontSize='md'><Link>Discussion boards</Link></Text>
                <Text fontSize='md'><Link>eBay Giving Works</Link></Text>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Flex>
      <Box mt="1em" textAlign="center"> {/* Center text on smaller screens */}
        <Text>
          Copyright © 1995-2024 eBay Inc. All Rights Reserved. Accessibility, User
          Agreement, Privacy, Payment. Terms of Use. Cookies, CA Privacy Notice,
          Your Privacy Choices and AdChoice.
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
