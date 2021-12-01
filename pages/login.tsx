import type { NextPage } from 'next';
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';

import { Grid, GridItem, Text, VStack, HStack, Stack, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Input } from "@chakra-ui/input";
import { useBreakpointValue } from '@chakra-ui/media-query';
import { FormControl, FormLabel, FormErrorMessage, useDisclosure } from '@chakra-ui/react';
import { Formik, Form, Field, FieldProps } from 'formik';

import Player from '../components/visualize/Player';
import Lines from '../components/visualize/three_effects/Lines';
import SwarmSphere from '../components/visualize/three_effects/SwarmSphere';
import useKeyPress from '../hooks/useKeyPress';

import * as THREE from 'three';

const RegisterForm: FC<{ onLogin: () => void, emailSpeed: number, setEmailSpeed: Dispatch<SetStateAction<number>>, passwordSpeed: number, setPasswordSpeed: Dispatch<SetStateAction<number>> }> = ({ onLogin, emailSpeed, setEmailSpeed, passwordSpeed, setPasswordSpeed }) => {

    const validatePassword = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
            setPasswordSpeed(5);
        } else {
            setPasswordSpeed(value.length * 2)
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
            setEmailSpeed(5);
        } else {
            setEmailSpeed(value.length * 2)
        }
        return error;
    }

    return (
        <Formik
            initialValues={{}}
            validateOnMount={true}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    actions.setSubmitting(false)
                }, 1000)
            }}>
            {({ isSubmitting, isValid }) => (
                <Form>
                    <VStack
                        bg="brand.700"
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
                            variant="alternative"
                            isDisabled={!isValid}
                            isLoading={isSubmitting}
                            type="submit">
                            Register
                        </Button>
                        <Spacer />
                        <HStack w="100%" mr="auto" mt="auto">
                            <Text>Have an account?</Text>
                            <Button size="sm" variant="alternative" onClick={onLogin}>Login</Button>
                        </HStack>
                    </VStack>
                </Form>
            )}
        </Formik>
    )
}

const LoginForm: FC<{ onRegister: () => void, emailSpeed: number, setEmailSpeed: Dispatch<SetStateAction<number>>, passwordSpeed: number, setPasswordSpeed: Dispatch<SetStateAction<number>> }> = ({ onRegister, emailSpeed, setEmailSpeed, passwordSpeed, setPasswordSpeed  }) => {

    const validatePassword = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
            setPasswordSpeed(5);
        } else {
            setPasswordSpeed(passwordSpeed + 1)
        }
        return error;
    }

    const validateEmail = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
            setEmailSpeed(5);
        } else {
            setEmailSpeed(emailSpeed + 1)
        }
        return error;
    }

    return (
        <Formik
            initialValues={{}}
            validateOnMount={true}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    actions.setSubmitting(false)
                }, 1000)
            }}>
            {({ isSubmitting, isValid }) => (
                <Form>
                    <VStack
                        bg="brand.700"
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
                            variant="alternative"
                            isDisabled={!isValid}
                            isLoading={isSubmitting}
                            type="submit">
                            Login
                        </Button>
                        <Spacer />
                        <HStack w="100%" mr="auto" mt="auto">
                            <Text>No account?</Text>
                            <Button size="sm" variant="alternative" onClick={onRegister}>Register</Button>
                        </HStack>
                    </VStack>
                </Form>
            )}
        </Formik>
    )
}

const Login: NextPage = () => {
    const { isOpen: isRegister, onOpen: onRegister, onClose: onLogin } = useDisclosure();

    const [emailSpeed, setEmailSpeed] = useState(5);
    const [passwordSpeed, setPasswordSpeed] = useState(5);

    return (
        <Grid h="100vh" templateAreas={{ base: `"player" "form"`, lg: `"form player"` }} templateColumns={{ base: "1fr", lg: "2fr 3fr", "2xl": "1fr 2fr" }} justifyContent="center">
            <GridItem w="80%" gridArea="form" placeSelf="center">
                {isRegister ? <RegisterForm
                                emailSpeed={emailSpeed}
                                setEmailSpeed={setEmailSpeed}
                                passwordSpeed={passwordSpeed}
                                setPasswordSpeed={setPasswordSpeed}
                                onLogin={onLogin} />
                            :
                            <LoginForm
                                emailSpeed={emailSpeed}
                                setEmailSpeed={setEmailSpeed}
                                passwordSpeed={passwordSpeed}
                                setPasswordSpeed={setPasswordSpeed}
                                onRegister={onRegister} />}
            </GridItem>
            <GridItem gridArea="player" w={{lg: "95%"}} h={{lg: "100%"}} p={10}>
                <Player controlsDisabled width="inherit" height="inherit">
                    <pointLight distance={40} intensity={8} color="lightblue" />
                    <Lines currentNoLines={1000} maxNoLines={1000} speed={emailSpeed} tempBoxes={new THREE.Object3D()} />
                    <SwarmSphere count={100} speedVol={passwordSpeed}  />
                </Player>
            </GridItem>
        </Grid>
    )
}

export default Login;