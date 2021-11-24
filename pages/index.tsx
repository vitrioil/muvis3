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
import { useBreakpointValue } from '@chakra-ui/media-query'

const Home: NextPage = () => {
  // const [valid, setValid] = useState(false);
  const canvasWidth = useBreakpointValue({base: 350, sm: 450, md: 500, xl: 660});
  const canvasHeight = useBreakpointValue({base: 200, sm: 200, md: 400});

  return (
    <>
      <HomeNav />
      <Grid templateAreas={{"base": `"title" "player" "controls" "desc"`, "lg": `"title player" "desc controls"`}}>
        <GridItem gridArea="title" placeSelf="center">
          <Stack spacing={{"base": 0, "lg": -10}}>
            <Text fontSize={{base: "4xl", sm: "4xl", md: "5xl", lg: "7xl"}}>Visualize</Text>
            <Text fontSize={{base: "4xl", sm: "4xl", md: "5xl", lg: "7xl"}}>Music in 3D</Text>
          </Stack>
        </GridItem>
        <GridItem gridArea="player" placeSelf="center">
          <Player width={canvasWidth ? canvasWidth: 900} height={canvasHeight ? canvasHeight : 400} />
        </GridItem>
        <GridItem gridArea="desc" placeSelf="center">
          <Stack>
            <Text>Test</Text>
            {/* <Text fontSize="2xl">Visualize music in detail with the help of music separation</Text>
            <Text fontSize="2xl">Apply visual effects to each separated signal</Text> */}
          </Stack>
        </GridItem>
        <GridItem gridArea="controls" placeSelf="center">
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
