import { FC } from 'react';
import { Box, Grid, GridItem, VStack, HStack, Spacer, Text, Center } from '@chakra-ui/layout';
import type { NextPage } from 'next'

import HomeNav from '../components/utils/nav/HomeNav';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { SearchIcon, CheckIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';
import { Select } from '@chakra-ui/react';

const ProjectCard: FC = () => {
    return (
        <VStack minH="200px" minW="250px"
                bgGradient="linear(to-b, brand.800 0%, brand.900 100%)"
                borderRadius={15}
                justifyContent="space-between">
            <HStack pt={5} w="100%" px={10}>
                <Text fontSize="xl" mr="auto">Project Name</Text>
                <Text fontSize="sm" mr={5} mt={2}>Ready {<CheckIcon color="green.500" />}</Text>
            </HStack>
            <HStack pb={5} w="100%" px={10}>
                <Text fontSize="sm" mr="auto">Edited now</Text>
                <Button size="sm">Open</Button>
            </HStack>
        </VStack>
    )
}

const TemplateCard: FC = () => {
    return (
        <Center minH="200px" w="100%" bgGradient="linear(to-b, brand.800 0%, brand.900 100%)" borderRadius={15}>
            <Text fontSize="2xl">Upload</Text>
        </Center>
    )
}

const ProjectGrid: FC = () => {
    const projects = Array(6).fill(0);

    return (
        <VStack w="100%">
            <Text p={4} w="100%" fontSize="2xl" textAlign="left">My Projects</Text>
            <HStack w="100%" px={5}>
                <InputGroup w="min(300px, 50%)">
                    <InputLeftElement>
                        <SearchIcon />
                    </InputLeftElement>
                    <Input bg="brand.800" />
                </InputGroup>
                <Spacer />
                <Box w="min(300px, 50%)">
                    <Select bg="none" variant="filled" placeholder="Sort By">
                        <option value="Name">Name</option>
                        <option value="Date">Date</option>
                    </Select>
                </Box>
            </HStack>
            <Grid overflowY="auto" w="100%" gap={10} p={5}
                  templateRows="repeat(auto-fit, 200px)"
                  templateColumns="repeat(auto-fit, minmax(250px, 1fr))">
                {projects.map((project, index) => {
                    return (
                        <GridItem key={index}>
                            <ProjectCard />
                        </GridItem>
                    )
                })}
            </Grid>
        </VStack>
    )
}

const TemplateProject: FC = () => {
    const templates = Array(3).fill(0);

    return (
        <VStack overflowY="auto" spacing={5} p={5}>
            <Text fontSize="2xl" textAlign="left" w="100%">
                Templates
            </Text>
            {templates.map((project, index) => {
                return (
                    <TemplateCard key={index} />
                )
            })}
        </VStack>
    )
}

const Home: NextPage = () => {
    return (
        <Grid gap={5} p={5}
              minH="100vh"
              maxH="100vh"
              templateAreas={{base: `"nav" "projects" "templates"`, lg: `"nav nav" "projects templates"`}}
              templateRows={{base: "5vh 500px 500px", lg: "5vh 1fr"}}
              templateColumns={{base: "1fr", lg: "3fr 1fr"}}>
            <GridItem w="100%" gridArea="nav" placeSelf="center">
                <HomeNav />
            </GridItem>
            <GridItem overflowY="auto"
                      gridArea="projects"
                      bgGradient="linear(to-b, brand.700 0%, brand.800 100%)"
                      borderRadius={20}>
                <ProjectGrid />
            </GridItem>
            <GridItem overflowY="auto"
                      gridArea="templates"
                      bgGradient="linear(to-b, brand.700 0%, brand.800 100%)"
                      borderRadius={20}>
                <TemplateProject />
            </GridItem>
        </Grid>
    )
}

export default Home;