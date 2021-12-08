import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { Grid, GridItem, Text, VStack, HStack, Stack, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel, FormErrorMessage, useDisclosure } from '@chakra-ui/react';
import { Formik, Form, Field, FieldProps } from 'formik';

import Player from '../components/visualize/Player';
import Lines from '../components/visualize/three_effects/Lines';
import SwarmSphere from '../components/visualize/three_effects/SwarmSphere';

import * as THREE from 'three';

const RegisterForm: FC<{ onLogin: () => void, setEmailSpeed: Dispatch<SetStateAction<number>>, setPasswordSpeed: Dispatch<SetStateAction<number>> }> = ({ onLogin, setEmailSpeed, setPasswordSpeed }) => {
    const router = useRouter();
    const bgTop =  useColorModeValue("brand.600", "brand.700");
    const bgBottom = useColorModeValue("brand.500", "brand.800");

    const validatePassword = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
            setPasswordSpeed(1);
        } else {
            setPasswordSpeed(value.length)
        }
        return error;
    }

    const validateConfirmPassword = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
        }
        return error;
    }

    const validateEmail = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
            setEmailSpeed(1);
        } else {
            setEmailSpeed(value.length)
        }
        return error;
    }

    return (
        <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            validateOnMount={true}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    router.push("/login")
                }, 1000)
            }}>
            {({ isSubmitting, isValid }) => (
                <Form>
                    <VStack
                        bgGradient={`linear(to-b, ${bgTop} 0%, ${bgBottom} 100%)`}
                        minH={{ base: "100%", md: "90vh" }}
                        w={{ base: "80vw", md: "100%" }}
                        borderRadius="20px"
                        p={10}
                        spacing={5}>
                        <Text placeSelf="flex-start" fontWeight="700" fontSize="4xl">Register</Text>
                        <Spacer />
                        <Field name="email" validate={validateEmail}>
                            {({ form, field }: FieldProps) => (
                                <FormControl isInvalid={!!(form.errors.email && form.touched.email)}>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input {...field} id="email" />
                                    <FormErrorMessage variant="statusForm">{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Stack w="100%" direction={{ base: "column", xl: "row" }}>
                            <Field name="password" validate={validatePassword}>
                                {({ form, field }: FieldProps) => (
                                    <FormControl variant="statusForm" isInvalid={!!(form.errors.password && form.touched.password)}>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <Input {...field} id="password" type="password" />
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="confirmPassword" validate={validateConfirmPassword}>
                                {({ form, field }: FieldProps) => (
                                    <FormControl variant="statusForm" isInvalid={!!(form.errors.confirmPassword && form.touched.confirmPassword)}>
                                        <FormLabel htmlFor="confirmPassword"> Confirm Password</FormLabel>
                                        <Input {...field} id="confirmPassword" type="password" />
                                        <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Stack>
                        <Spacer />
                        <Button h={50}
                            w="100%"
                            isDisabled={!isValid}
                            isLoading={isSubmitting}
                            type="submit">
                            Register
                        </Button>
                        <Spacer />
                        <HStack w="100%" mr="auto" mt="auto">
                            <Text>Have an account?</Text>
                            <Button size="sm" onClick={onLogin}>Login</Button>
                        </HStack>
                    </VStack>
                </Form>
            )}
        </Formik>
    )
}

const LoginForm: FC<{ onRegister: () => void, setEmailSpeed: Dispatch<SetStateAction<number>>, setPasswordSpeed: Dispatch<SetStateAction<number>> }> = ({ onRegister, setEmailSpeed, setPasswordSpeed }) => {
    const router = useRouter();
    const bgTop =  useColorModeValue("brand.600", "brand.700");
    const bgBottom = useColorModeValue("brand.500", "brand.800");

    const validatePassword = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
            setPasswordSpeed(1);
        } else {
            setPasswordSpeed(value.length)
        }
        return error;
    }

    const validateEmail = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
            setEmailSpeed(1);
        } else {
            setEmailSpeed(value.length)
        }
        return error;
    }

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validateOnMount={true}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    router.push({ pathname: "/home" })
                }, 1000)
            }}>
            {({ isSubmitting, isValid }) => (
                <Form>
                    <VStack
                        bgGradient={`linear(to-b, ${bgTop} 0%, ${bgBottom} 100%)`}
                        minH={{ base: "100%", md: "90vh" }}
                        w={{ base: "80vw", md: "100%" }}
                        borderRadius="20px"
                        p={10}
                        spacing={5}>
                        <Text placeSelf="flex-start" fontWeight="700" fontSize="4xl">Login</Text>
                        <Spacer />
                        <Field name="email" validate={validateEmail}>
                            {({ form, field }: FieldProps) => (
                                <FormControl isInvalid={!!(form.errors.email && form.touched.email)}>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input {...field} id="email" />
                                    <FormErrorMessage variant="statusForm">{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="password" validate={validatePassword}>
                            {({ form, field }: FieldProps) => (
                                <FormControl variant="statusForm" isInvalid={!!(form.errors.password && form.touched.password)}>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Input {...field} id="password" type="password" />
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Spacer />
                        <Button h={50}
                            w="100%"
                            isDisabled={!isValid}
                            isLoading={isSubmitting}
                            type="submit">
                            Login
                        </Button>
                        <Spacer />
                        <HStack w="100%" mr="auto" mt="auto">
                            <Text>No account?</Text>
                            <Button size="sm" onClick={onRegister}>Register</Button>
                        </HStack>
                    </VStack>
                </Form>
            )}
        </Formik>
    )
}

const Login: NextPage = () => {
    const { isOpen: isRegister, onOpen: onRegister, onClose: onLogin } = useDisclosure();

    const maxLines = 10000;

    const [emailSpeed, setEmailSpeed] = useState(5);
    const [passwordSpeed, setPasswordSpeed] = useState(5);

    return (
        <Grid h="100vh" templateAreas={{ base: `"player" "form"`, lg: `"form player"` }}
              templateColumns={{ base: "1fr", lg: "2fr 3fr", "2xl": "1fr 2fr" }} justifyContent="center">
            <GridItem w="80%" gridArea="form" placeSelf="center">
                {isRegister ? <RegisterForm
                    setEmailSpeed={setEmailSpeed}
                    setPasswordSpeed={setPasswordSpeed}
                    onLogin={onLogin} />
                    :
                    <LoginForm
                        setEmailSpeed={setEmailSpeed}
                        setPasswordSpeed={setPasswordSpeed}
                        onRegister={onRegister} />}
            </GridItem>
            <GridItem gridArea="player" w={{ lg: "95%" }} h={{ lg: "100%" }} p={10}>
                <Player controlsDisabled width="inherit" height="inherit">
                    <pointLight distance={40} intensity={8} color="lightblue" />
                    <Lines currentNoLines={Math.min(maxLines, (emailSpeed * 100 + 500))}
                        maxNoLines={maxLines}
                        speed={emailSpeed}
                        tempBoxes={new THREE.Object3D()} />
                    <SwarmSphere count={100} speedVol={passwordSpeed * 5} />
                </Player>
            </GridItem>
        </Grid>
    )
}

export default Login;