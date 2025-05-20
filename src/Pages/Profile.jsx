// ProfilePageRefactor.jsx
import React, { useEffect, useState } from 'react';
import {
  Box, Flex, Avatar, Text, Button, Divider,
  Stack, Heading, Link as ChakraLink
} from '@chakra-ui/react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import ChangePassword from '../components/ChangePassword';
import StartNavbar from '../components/StartNavbar';
import MiddleNavbar from '../components/MiddleNavbar';
import Bill from '../components/Bill';
import EditProfile from '../components/EditProfile';

const ProfileCard = ({ user, onEdit, onTogglePassword, showChangePassword, onLogout }) => (
  <Box maxW="3xl" mx="auto" mt={12} p={8} borderWidth={0} borderRadius="2xl" boxShadow="2xl" bgGradient="linear(to-br, white, blue.50)">
    <Flex direction={{ base: 'column', md: 'row' }} alignItems="flex-start" gap={10}>
      <Box textAlign="center" minW="220px">
        <Avatar size="2xl" name={user.name} src={user.avatar} mb={4} boxShadow="lg" border="4px solid #3665F3" />
        <Text fontSize="lg" fontWeight="bold" color="#3665F3">{user.name}</Text>
        <Text color="gray.600" fontSize="sm">{user.email}</Text>
        <Text fontSize="xs" color="gray.500" mt={1}>Member since: <b>{user.joined}</b></Text>
      </Box>
      <Stack spacing={5} flex={1} minW={0} bg="white" p={6} borderRadius="xl" boxShadow="md">
        <Flex gap={4} flexWrap="wrap" justifyContent="flex-end">
          <Button leftIcon={<FaUserEdit />} colorScheme="blue" variant="outline" size="sm" onClick={onEdit}>Edit Profile</Button>
          <Button colorScheme="gray" variant={showChangePassword ? 'solid' : 'outline'} size="sm" onClick={onTogglePassword}>
            Change Password
          </Button>
          <Button colorScheme="red" variant="outline" size="sm" onClick={onLogout}>Logout</Button>
        </Flex>
      </Stack>
    </Flex>
  </Box>
);

const QuickLinks = () => (
  <Box maxW="3xl" mx="auto" mt={6} p={6}>
    <Text fontWeight="bold" mb={2}>Quick Links</Text>
    <Flex gap={6} flexWrap="wrap">
      <ChakraLink as={RouterLink} to="/orders" color="#3665F3">My Orders</ChakraLink>
      <ChakraLink as={RouterLink} to="/watchlist" color="#3665F3">Watchlist</ChakraLink>
      <ChakraLink as={RouterLink} to="/messages" color="#3665F3">Messages</ChakraLink>
      <ChakraLink as={RouterLink} to="/settings" color="#3665F3">Account Settings</ChakraLink>
    </Flex>
  </Box>
);

const OrderHistory = ({ bills }) => (
  <Box maxW="3xl" mx="auto" mt={8}>
    <Heading size="md" mb={4} color="#3665F3">Order History</Heading>
    <Stack spacing={6}>
      {bills.map((bill, idx) => (
        <Bill key={idx} bill={bill} />
      ))}
    </Stack>
  </Box>
);

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', avatar: '', joined: '' });
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [bills, setBills] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if (!isAuth) {
      navigate('/signin');
      return;
    }
    const currentUser = JSON.parse(localStorage.getItem('userData')) || {};
    setUser({
      name: currentUser.name || currentUser.firstName || 'User',
      email: currentUser.email || '',
      avatar: currentUser.avatar || '',
      joined: currentUser.joined || 'N/A',
    });
    const allBills = JSON.parse(localStorage.getItem('bills')) || [];
    const userBills = allBills.filter(b => b.userEmail === currentUser.email);
    setBills(userBills.map(b => b.bill || b));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userData');
    navigate('/signin');
  };

  return (
    <>
      <StartNavbar />
      <MiddleNavbar />
      <ProfileCard
        user={user}
        onEdit={() => setIsEditing(true)}
        onTogglePassword={() => setShowChangePassword(!showChangePassword)}
        showChangePassword={showChangePassword}
        onLogout={handleLogout}
      />
      <Box maxW="3xl" mx="auto">
        {isEditing && <EditProfile user={user} onClose={() => setIsEditing(false)} onSave={setUser} />}
        {showChangePassword && <ChangePassword onClose={() => setShowChangePassword(false)} />}
      </Box>
      <QuickLinks />
      {bills.length > 0 && <OrderHistory bills={bills} />}
    </>
  );
};

export default Profile;
