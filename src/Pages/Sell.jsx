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

function Sell() {
  return (
    <div>
      <StartNavbar />
      <MiddleNavbar />

    </div>

  )
}

export default Sell