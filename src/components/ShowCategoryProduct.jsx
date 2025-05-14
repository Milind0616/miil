import React from 'react';
import { data } from "../db";
import { Link, Heading, Image, Box, Stack } from "@chakra-ui/react";

const ShowCategoryProduct = () => {
  console.log(data);
  return (
    <Box mt="5em" textAlign="center"> {/* Center heading and box on smaller screens */}
      <Heading size="lg" mb="2em">Explore Popular Categories</Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }} // Responsive direction
        spacing={5} // Space between items
        align="center"
        justify="center"
      >
        {data.map((ele) => (
          <Box
            key={ele.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center" // Center text on smaller screens
          >
            <Image
              boxSize="180px"
              borderRadius="full"
              src={ele.image}
              alt={ele.title}
            />
            <Link as="b" mt="1em">{ele.title}</Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default ShowCategoryProduct;
