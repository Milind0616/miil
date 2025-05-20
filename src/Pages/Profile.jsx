import React, { useEffect, useState } from 'react';
import { Box, Flex, Avatar, Text, Button, Divider, Stack, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import ChangePassword from '../components/ChangePassword';
import StartNavbar from '../components/StartNavbar';
import MiddleNavbar from '../components/MiddleNavbar';
import Bill from '../components/Bill';
import EditProfile from '../components/EditProfile';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: '',
    joined: '',
  });
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [bills, setBills] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if (!isAuth) {
      navigate('/signin');
      return;
    }
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
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    // localStorage.removeItem('userData');
    window.location.href = '/signin';
  };

  return (
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
  );
};

export default Profile;
