import StartNavbar from '../components/StartNavbar'
import MiddleNavbar from '../components/MiddleNavbar'
import { useNavigate } from 'react-router-dom'
import { Box, Select,VStack,Link, Button, Heading, Image, SimpleGrid, Stack, Text, HStack } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import Giftcard from './Giftcard'
import { useEffect, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

function Sell() {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    const auth = localStorage.getItem('isAuth');
    if (!auth) {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <div>
      <StartNavbar />
      <MiddleNavbar />
      <Giftcard />
    </div>
  )
}

export default Sell