import type { NextPage } from "next";
import { useState, FC } from "react";

import { useColorModeValue } from "@chakra-ui/color-mode";
import { Grid, GridItem, VStack } from "@chakra-ui/layout";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, Divider, Input } from '@chakra-ui/react'
import * as THREE from 'three';

import HomeNav from "../components/utils/nav/HomeNav";
import Player from "../components/visualize/Player";
import Lines from "../components/visualize/three_effects/Lines";
import SwarmSphere from "../components/visualize/three_effects/SwarmSphere";
import Controls from "../components/visualize/Controls";
import { useAppSelector } from "../redux/hook";



const Settings: FC = () => {
  const [tabIndex, setTabIndex] = useState(0)
    return (
        <Box p={5}>
            <Text fontSize="2xl">Settings</Text>
            <Tabs isFitted m={5} onChange={(index) => setTabIndex(index)} variant="enclosed">
                <TabList>
                    <Tab>Effects</Tab>
                    <Tab>Stems</Tab>
                </TabList>
                <TabPanels p=''>
                    <TabPanel>
                        <Tabs isFitted onChange={(index) => setTabIndex(index)} variant="enclosed">
                            <TabList>
                                <Tab>Line</Tab>
                                <Tab>Sphere</Tab>
                                <Tab>Other</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Text fontSize="xl">General</Text>
                                    <Divider />
                                    <VStack overflowY="auto">
                                        <Text fontSize="lg">Color</Text>
                                        <Input variant="flushed" />
                                        <Text fontSize="lg">No. of Lines</Text>
                                        <Input variant="flushed" />
                                        <Text fontSize="lg">Speed</Text>
                                        <Input variant="flushed" />
                                        <Text fontSize="lg">Direction</Text>
                                        <Input variant="flushed" />
                                    </VStack>
                                </TabPanel>
                                <TabPanel>
                                    <Text fontSize="xl">General</Text>
                                    <Divider />
                                </TabPanel>
                                <TabPanel>
                                    <Text fontSize="xl">General</Text>
                                    <Divider />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs isFitted onChange={(index) => setTabIndex(index)} variant="enclosed">
                            <TabList>
                                <Tab>Vocals</Tab>
                                <Tab>Accompaniment</Tab>
                                <Tab>Other</Tab>
                            </TabList>
                            <TabPanels p=''>
                                <TabPanel>Vocals</TabPanel>
                                <TabPanel>Accompaniment</TabPanel>
                                <TabPanel>Other</TabPanel>
                            </TabPanels>
                        </Tabs>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

const Project: NextPage = () => {
    const bgTop =  useColorModeValue("brand.400", "brand.700");
    const bgBottom = useColorModeValue("brand.300", "brand.800");

    const maxLines = 500;

    const [lineSpeed, setLineSpeed] = useState(5);
    const [sphereSpeed, setSphereSpeed] = useState(5);

    const newLineSpeed = useAppSelector((state) => state.effect.lineSpeed);

    return (
        <Grid gap={{base: 0, md: 5}} p={5}
              h="100%"
              maxH="100vh"
              templateAreas={{base: `"nav" "player" "controls"`, md: `"nav nav" "player settings" "controls controls"`}}
              templateRows="5vh 1fr 200px"
              templateColumns={{base: "1fr", md: "3fr 1fr"}}>
            <GridItem w="100%" gridArea="nav" placeSelf="center">
                <HomeNav />
            </GridItem>
            <GridItem w="100%" h="100%" gridArea="player">
                <Player width="inherit" height="inherit">
                    <pointLight distance={40} intensity={8} color="lightblue" />
                    <Lines currentNoLines={Math.min(maxLines, (lineSpeed * 100 + 500))}
                        maxNoLines={maxLines}
                        speed={newLineSpeed * 2}
                        tempBoxes={new THREE.Object3D()} />
                    <SwarmSphere />
                </Player>
            </GridItem>
            <GridItem borderRadius="xl" 
                      bgGradient={`linear(to-b, ${bgTop} 0%, ${bgBottom} 100%)`}
                      gridArea="settings" overflowY="auto">
                <Settings />
            </GridItem>
            <GridItem overflow="auto" gridArea="controls">
                <Controls fullSize setLineSpeed={setLineSpeed} setSphereSpeed={setSphereSpeed} />
            </GridItem>
        </Grid>
    )
}

export default Project;