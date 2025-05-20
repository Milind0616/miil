import React from 'react';
import { Box, Heading, Text, Stack, Divider } from '@chakra-ui/react';

const Bill = ({ bill }) => {
  if (!bill) return null;
  return (
    <Box bg="white" p={6} borderRadius="xl" boxShadow="md" mt={6}>
      <Heading size="md" mb={4} color="#3665F3">Order Bill</Heading>
      <Stack spacing={2}>
        <Text><b>Date:</b> {bill.date && bill.date.split(',')[0]}</Text>
        <Text><b>Time:</b> {bill.date && bill.date.split(',')[1]?.trim().split(':').slice(0,2).join(':')}</Text>
        <Text><b>Items:</b> {bill.items.length}</Text>
        <Divider />
        {bill.items.map((item, idx) => (
          <Box key={idx}>
            <Text fontWeight="bold">{item.name}</Text>
            <Text color="gray.600">${item.price}</Text>
          </Box>
        ))}
        <Divider />
        <Text fontWeight="bold" color="green.600">Total: ${bill.total}</Text>
      </Stack>
    </Box>
  );
};

export default Bill;
