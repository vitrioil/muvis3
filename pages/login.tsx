import type { NextPage } from 'next';
import { FC, useState } from 'react';

import { Grid, GridItem, Text, VStack, HStack, Stack, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Input } from "@chakra-ui/input";
import { useBreakpointValue } from '@chakra-ui/media-query';
import { FormControl, FormLabel, FormErrorMessage, useDisclosure } from '@chakra-ui/react';
import { Formik, Form, Field, FieldProps } from 'formik';

import Player from '../components/visualize/player';

const RegisterForm: FC<{ onLogin: () => void }> = ({ onLogin }) => {

    const validateEmail = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
        }
        return error;
    }

    return (
        <Formik
            initialValues={{}}
            isInitialValid={false}
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
                            <Field name="password" validate={validateEmail}>
                                {({ form, field }: FieldProps) => (
                                    <FormControl variant="statusForm" isInvalid={!!(form.errors.password && form.touched.password)}>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <Input {...field} id="password" />
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="confirmPassword" validate={validateEmail}>
                                {({ form, field }: FieldProps) => (
                                    <FormControl variant="statusForm" isInvalid={!!(form.errors.confirmPassword && form.touched.confirmPassword)}>
                                        <FormLabel htmlFor="confirmPassword"> Confirm Password</FormLabel>
                                        <Input {...field} id="confirmPassword" />
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

const LoginForm: FC<{ onRegister: () => void }> = ({ onRegister }) => {

    const validateEmail = (value: string) => {
        let error;
        if (!value) {
            error = 'Empty value not allowed';
        }
        return error;
    }

    return (
        <Formik
            initialValues={{}}
            isInitialValid={false}
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
                        <Field name="password" validate={validateEmail}>
                            {({ form, field }: FieldProps) => (
                                <FormControl variant="statusForm" isInvalid={!!(form.errors.password && form.touched.password)}>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Input {...field} id="password" />
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
    const { isOpen: isLogin, onOpen: onLogin, onClose: onRegister } = useDisclosure();

    const canvasWidth = useBreakpointValue({ base: 350, sm: 450, md: 500, lg: 600, xl: 700, "2xl": 900 });
    const canvasHeight = useBreakpointValue({ base: 200, sm: 200, md: 400, lg: 500, xl: 600, "2xl": 800 });

    return (
        <Grid h="100vh" templateAreas={{ base: `"player" "form"`, lg: `"form player"` }} templateColumns={{ base: "1fr", lg: "2fr 3fr", "2xl": "1fr 2fr" }} justifyContent="center">
            <GridItem w="80%" gridArea="form" placeSelf="center">
                {isLogin ? <LoginForm onRegister={onRegister} /> : <RegisterForm onLogin={onLogin} />}
            </GridItem>
            <GridItem gridArea="player" placeSelf="center">
                <Player controlsDisabled width={canvasWidth ? canvasWidth : 660} height={canvasHeight ? canvasHeight : 400} />
            </GridItem>
        </Grid>
    )
}

export default Login;