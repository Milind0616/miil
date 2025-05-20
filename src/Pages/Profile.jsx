import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Box, Flex, Avatar, Text, Button, Divider, Stack, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
=======
import { Box, Flex, Avatar, Text, Button, Divider, Stack, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import ChangePassword from '../components/ChangePassword';
import StartNavbar from '../components/StartNavbar';
import MiddleNavbar from '../components/MiddleNavbar';
import Bill from '../components/Bill';
import EditProfile from '../components/EditProfile';
>>>>>>> 22208a8259863de790789e5b3bfc4c05c8f73160

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: '',
    joined: '',
  });
<<<<<<< HEAD
=======
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [bills, setBills] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
>>>>>>> 22208a8259863de790789e5b3bfc4c05c8f73160

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if (!isAuth) {
      navigate('/signin');
      return;
    }
<<<<<<< HEAD
    const storedData = JSON.parse(localStorage.getItem('userData')) || {};
    setUser({
      name: storedData.name || 'User',
      email: storedData.email || '',
      avatar: '',
      joined: storedData.joined || 'N/A',
    });
=======
    const users = JSON.parse(localStorage.getItem('userData')) || [];
    const currentUser = Array.isArray(users)
      ? users.find(u => u.email === isAuth)
      : users;
    setUser({
      name: currentUser?.name || currentUser?.firstName || 'User',
      email: currentUser?.email || '',
      avatar: currentUser?.avatar || '',
      joined: currentUser?.joined || 'N/A',
    });
    // Load all bills for this user only
    const allBills = JSON.parse(localStorage.getItem('bills')) || [];
    // Support both {userEmail, bill} and {userEmail, ...billFields} structures
    const userBills = allBills.filter(b => b.userEmail === (currentUser?.email || ''));
    setBills(userBills.map(b => b.bill || b));
>>>>>>> 22208a8259863de790789e5b3bfc4c05c8f73160
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
<<<<<<< HEAD
    localStorage.removeItem('userData');
=======
    // localStorage.removeItem('userData');
>>>>>>> 22208a8259863de790789e5b3bfc4c05c8f73160
    window.location.href = '/signin';
  };

  return (
<<<<<<< HEAD
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
=======
    <>
      <StartNavbar />
      <MiddleNavbar />
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
              <Button leftIcon={<FaUserEdit />} colorScheme="blue" variant="outline" size="sm" onClick={() => setIsEditing(true)}>Edit Profile</Button>
              <Button colorScheme="gray" variant={showChangePassword ? 'solid' : 'outline'} size="sm" onClick={() => setShowChangePassword(!showChangePassword)}>
                Change Password
              </Button>
              <Button colorScheme="red" variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
            </Flex>
            <Divider my={2} />
            {isEditing && (
              <Box mt={2}>
                <EditProfile user={user} onClose={() => setIsEditing(false)} onSave={setUser} />
              </Box>
            )}
            {showChangePassword && (
              <Box mt={2}>
                <ChangePassword onClose={() => setShowChangePassword(false)} />
              </Box>
            )}
          </Stack>
        </Flex>
      </Box>
      {/* All Bills Section */}
      {bills.length > 0 && (
        <Box maxW="3xl" mx="auto" mt={8}>
          <Heading size="md" mb={4} color="#3665F3">Order History</Heading>
          <Stack spacing={6}>
            {bills.map((bill, idx) => (
              <Bill key={idx} bill={bill} />
            ))}
          </Stack>
        </Box>
      )}
    </>
>>>>>>> 22208a8259863de790789e5b3bfc4c05c8f73160
  );
};

export default Profile;
