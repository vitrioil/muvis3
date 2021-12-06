import { FC } from 'react';
import { Box, Grid, GridItem, VStack } from '@chakra-ui/layout';
import type { NextPage } from 'next'

import HomeNav from '../components/utils/nav/HomeNav';

const ProjectCard: FC = () => {
    return (
        <Box minH="200px" minW="250px" bg="brand.900" borderRadius={15}>
        </Box>
    )
}

const TemplateCard: FC = () => {
    return (
        <Box minH="200px" w="100%" bg="brand.900" borderRadius={15}>
        </Box>
    )
}

const ProjectGrid: FC = () => {
    const projects = Array(20).fill(0);

    return (
        <Grid h="80vh" gap={10} p={5}  templateRows="repeat(auto-fit, 200px)" overflowY="auto" templateColumns="repeat(auto-fit, minmax(250px, 1fr))">
            {projects.map((project, index) => {
                return (
                    <GridItem key={index}>
                        <ProjectCard />
                    </GridItem>
                )
            })}
        </Grid>
    )
}

const TemplateProject: FC = () => {
    const templates = Array(10).fill(0);

    return (
        <VStack h="80vh" overflowY="auto" spacing={10} p={10}>
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
        <>
            <HomeNav />
            <Grid gap={10} p={5} templateAreas={{base: `"projects" "templates"`, lg: `"projects templates"`}} templateColumns={{base: "1fr", lg: "3fr 1fr"}}>
                <GridItem bg="brand.800" borderRadius={20}>
                    <Box w="100%" h="20px" bg="brand.800" borderRadius={20} />
                    <ProjectGrid />
                    <Box w="100%" h="20px" bg="brand.800" borderRadius={20} />
                </GridItem>
                <GridItem bg="brand.800" borderRadius={20}>
                    <Box w="100%" h="20px" bg="brand.800" borderRadius={20} />
                    <TemplateProject />
                    <Box w="100%" h="20px" bg="brand.800" borderRadius={20} />
                </GridItem>
            </Grid>
        </>
    )
}

export default Home;