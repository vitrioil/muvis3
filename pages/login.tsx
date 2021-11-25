import type { NextPage } from 'next'
import { FC, useState } from 'react'

import { Grid, GridItem, Text, VStack, HStack, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Player from '../components/visualize/player';
import { useBreakpointValue } from '@chakra-ui/media-query';

import Input from '../components/utils/Input';

const LoginForm: FC = () => {
    const [emailValid, setEmailValid] = useState(true);
    const [passValid, setPassValid] = useState(true);

    return (
        <VStack
            bg="brand.700"
            minH={{base: "100%", md: "90vh"}}
            w={{ base: "80vw", md: "100%" }}
            borderRadius="20px"
            p={10}
            spacing={5}>
            <Text placeSelf="flex-start" fontWeight="700" fontSize="4xl">Login</Text>
            <Spacer />
            <Input  isInvalid={!emailValid}
                    label="Email"
                    onChange={() => setEmailValid(true)}
                    onBlur={(e) => e.target.value ? setEmailValid(true): setEmailValid(false)}
                    statusText={!emailValid ? "Please enter email": ""} />
            <Input  isInvalid={!passValid}
                    label="Password"
                    onChange={() => setPassValid(true)}
                    onBlur={(e) => e.target.value ? setPassValid(true): setPassValid(false)}
                    statusText={!passValid ? "Please enter password": ""} />
            <Spacer />
            <Button h={50} w="100%" variant="alternative">Login</Button>
            <Spacer />
            <HStack w="100%" mr="auto" mt="auto">
                <Text>No account?</Text>
                <Button size="sm" variant="alternative">Register</Button>
            </HStack>
        </VStack>
    )
}

const Login: NextPage = () => {
    const canvasWidth = useBreakpointValue({ base: 350, sm: 450, md: 500, lg: 600, xl: 700, "2xl": 900 });
    const canvasHeight = useBreakpointValue({ base: 200, sm: 200, md: 400, lg: 500, xl: 600, "2xl": 800 });

    return (
        <Grid h="100vh" templateAreas={{ base: `"player" "form"`, lg: `"form player"` }} templateColumns={{base: "1fr", lg: "2fr 3fr", "2xl": "1fr 2fr"}} justifyContent="center">
            <GridItem w="80%" gridArea="form" placeSelf="center">
                <LoginForm />
            </GridItem>
            <GridItem gridArea="player" placeSelf="center">
                <Player controlsDisabled width={canvasWidth ? canvasWidth : 660} height={canvasHeight ? canvasHeight : 400} />
            </GridItem>
        </Grid>
    )
}

export default Login;