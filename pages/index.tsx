import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Grid, GridItem, Box, HStack, VStack, Stack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

import Controls from '../components/visualize/controls'
import Input from '../components/utils/Input'
import Player from '../components/visualize/player'
import HomeNav from '../components/utils/nav/HomeNav';

const Home: NextPage = () => {
  const [valid, setValid] = useState(false);

  return (
    <>
      <HomeNav />
      <Grid templateColumns="1fr 1fr" spacing={50} gap={50}>
        <GridItem ml={100}>
          <Stack spacing={-10}>
            <Text fontSize="9xl">Visualize</Text>
            <Text fontSize="9xl">Music</Text>
            <Text fontSize="5xl">in 3D</Text>
          </Stack>
        </GridItem>
        <GridItem placeSelf="center">
          <Player width={830} height={450} />
        </GridItem>
        <GridItem ml={100}>
          <Stack>
            <Text fontSize="3xl">Visualize music in detail with the help of music separation</Text>
            <Text fontSize="3xl">Apply visual effects to each separated signal</Text>
          </Stack>
        </GridItem>
        <GridItem placeSelf="center">
          <Controls />
        </GridItem>
      </Grid>
    </>
  )
  // return (
  //   <>
  //     <HomeNav />
  //     <VStack h="100vh" spacing="10px" p="10px">
  //       <Player width={1200} height={450} />
  //       <HStack w="100vw" bg="brand.900" p="100px">
  //         <Box>
  //           <Controls />
  //         </Box>
  //         <Box bg="brand.700" w="700px" h="100px" p="20px">
  //             <Input label="Email" isInvalid={!valid} onChange={() => setValid(true)} onBlur={(e) => e.target.value ? setValid(true): setValid(false)} />
  //         </Box>
  //         <Box bg="brand.700" w="700px" h="100px" p="20px">
  //           <Button>text</Button>
  //         </Box>
  //       </HStack>
  //     </VStack>
  //   </>
  // )
}

export default Home
