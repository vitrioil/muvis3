import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Box, HStack } from '@chakra-ui/layout'

import Controls from '../components/visualize/controls'
import Input from '../components/utils/Input';

const Home: NextPage = () => {
  return (
    <HStack h="100vh" w="100vw" bg="brand.900" p="100px">
      <Box>
        <Controls />
      </Box>
      <Box bg="brand.700" w="700px" h="100px" p="20px">
        <Input />
      </Box>
    </HStack>
  )
}

export default Home
