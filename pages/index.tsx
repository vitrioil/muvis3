import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Box, HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

import Controls from '../components/visualize/controls'
import Input from '../components/utils/Input'

const Home: NextPage = () => {
  const [valid, setValid] = useState(false);

  return (
    <HStack h="100vh" w="100vw" bg="brand.900" p="100px">
      <Box>
        <Controls />
      </Box>
      <Box bg="brand.700" w="700px" h="100px" p="20px">
          <Input label="Email" isInvalid={!valid} onChange={() => setValid(true)} onBlur={(e) => e.target.value ? setValid(true): setValid(false)} />
      </Box>
      <Box bg="brand.700" w="700px" h="100px" p="20px">
        <Button>text</Button>
      </Box>
    </HStack>
  )
}

export default Home
