import React, { useEffect, useState } from 'react';
import { Box, Flex, Avatar, Text, Button, Divider, Stack, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: '',
    joined: '',
  });

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if (!isAuth) {
      navigate('/signin');
      return;
    }
    const storedData = JSON.parse(localStorage.getItem('userData')) || {};
    setUser({
      name: storedData.name || 'User',
      email: storedData.email || '',
      avatar: '',
      joined: storedData.joined || 'N/A',
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userData');
    window.location.href = '/signin';
  };

  return (
    <Box maxW="3xl" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg" boxShadow="md" bg="white">
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" gap={8}>
        <Avatar size="2xl" name={user.name} src={user.avatar} />
        <Stack spacing={2} flex={1} minW={0}>
          <Text fontSize="2xl" fontWeight="bold" color="#3665F3">{user.name}</Text>
          <Text color="gray.600">{user.email}</Text>
          <Text fontSize="sm" color="gray.500">Member since: <b>{user.joined}</b></Text>
          <Divider my={2} />
          <Flex gap={4} flexWrap="wrap">
            <Button colorScheme="blue" variant="solid" size="sm">Edit Profile</Button>
            <Button colorScheme="gray" variant="outline" size="sm">Change Password</Button>
            <Button colorScheme="red" variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
          </Flex>
        </Stack>
      </Flex>
      <Divider my={6} />
      <Box>
        <Text fontWeight="bold" mb={2}>Quick Links</Text>
        <Flex gap={6} flexWrap="wrap">
          <Link color="#3665F3" href="#">My Orders</Link>
          <Link color="#3665F3" href="#">Watchlist</Link>
          <Link color="#3665F3" href="#">Messages</Link>
          <Link color="#3665F3" href="#">Account Settings</Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Profile;
