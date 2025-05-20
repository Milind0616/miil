import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Stack, useToast } from '@chakra-ui/react';

const EditProfile = ({ user, onClose, onSave }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [joined] = useState(user.joined || '');
  const [avatar, setAvatar] = useState(user.avatar || '');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast({ title: 'Name and Email are required.', status: 'error', duration: 3000, isClosable: true });
      return;
    }
    // Update localStorage
    const storedData = JSON.parse(localStorage.getItem('userData')) || {};
    storedData.name = name;
    storedData.email = email;
    storedData.avatar = avatar;
    localStorage.setItem('userData', JSON.stringify(storedData));
    toast({ title: 'Profile updated successfully.', status: 'success', duration: 3000, isClosable: true });
    if (onSave) onSave({ ...user, name, email, avatar, joined });
    if (onClose) onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius="md" boxShadow="sm" bg="gray.50">
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={e => setName(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Profile Picture</FormLabel>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {avatar && (
            <Box mt={2}>
              <img src={avatar} alt="Profile Preview" style={{ width: 80, height: 80, borderRadius: '50%' }} />
            </Box>
          )}
        </FormControl>
        <Button colorScheme="blue" type="submit">Save</Button>
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
      </Stack>
    </Box>
  );
};

export default EditProfile;
