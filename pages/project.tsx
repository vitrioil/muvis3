import type { NextPage } from "next";
import { useState } from "react";

import { useColorModeValue } from "@chakra-ui/color-mode";
import { Grid, GridItem } from "@chakra-ui/layout";
import * as THREE from 'three';

import HomeNav from "../components/utils/nav/HomeNav";
import Player from "../components/visualize/Player";
import Lines from "../components/visualize/three_effects/Lines";
import SwarmSphere from "../components/visualize/three_effects/SwarmSphere";
import Controls from "../components/visualize/Controls";


const Project: NextPage = () => {
    const bgTop =  useColorModeValue("brand.400", "brand.700");
    const bgBottom = useColorModeValue("brand.300", "brand.800");

    const maxLines = 500;

    const [emailSpeed, setEmailSpeed] = useState(5);
    const [passwordSpeed, setPasswordSpeed] = useState(5);

    return (
        <Grid gap={{base: 0, md: 5}} p={5}
              h="100%"
              maxH="100vh"
              templateAreas={{base: `"nav" "player" "controls"`, md: `"nav nav" "player settings" "controls controls"`}}
              templateRows="5vh 3fr minmax(2fr, 300px)"
              templateColumns={{base: "1fr", md: "3fr 1fr"}}>
            <GridItem w="100%" gridArea="nav" placeSelf="center">
                <HomeNav />
            </GridItem>
            <GridItem w="100%" h="100%" gridArea="player">
                <Player controlsDisabled width="inherit" height="inherit">
                    <pointLight distance={40} intensity={8} color="lightblue" />
                    <Lines currentNoLines={Math.min(maxLines, (emailSpeed * 100 + 500))}
                        maxNoLines={maxLines}
                        speed={emailSpeed}
                        tempBoxes={new THREE.Object3D()} />
                    <SwarmSphere count={100} speedVol={passwordSpeed * 5} />
                </Player>
            </GridItem>
            <GridItem w="100%" h="100%" borderRadius="xl" 
                      bgGradient={`linear(to-b, ${bgTop} 0%, ${bgBottom} 100%)`}
                      gridArea="settings">
            </GridItem>
            <GridItem overflowX="auto" gridArea="controls">
                <Controls fullSize />
            </GridItem>
        </Grid>
    )
}

export default Project;