import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, useToast, Stack } from '@chakra-ui/react';

const ChangePassword = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toast = useToast();

  const handleChangePassword = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData')) || {};
    if (oldPassword !== storedData.password) {
      toast({ title: 'Old password is incorrect.', status: 'error', duration: 3000, isClosable: true });
      return;
    }
    if (newPassword.length < 6) {
      toast({ title: 'New password must be at least 6 characters.', status: 'error', duration: 3000, isClosable: true });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: 'Passwords do not match.', status: 'error', duration: 3000, isClosable: true });
      return;
    }
    storedData.password = newPassword;
    localStorage.setItem('userData', JSON.stringify(storedData));
    toast({ title: 'Password changed successfully.', status: 'success', duration: 3000, isClosable: true });
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    if (onClose) onClose();
  };

  return (
    <Box as="form" onSubmit={handleChangePassword} p={4} borderWidth={1} borderRadius="md" boxShadow="sm" bg="gray.50">
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>Old Password</FormLabel>
          <Input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>New Password</FormLabel>
          <Input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm New Password</FormLabel>
          <Input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" type="submit">Change Password</Button>
      </Stack>
    </Box>
  );
};

export default ChangePassword;
