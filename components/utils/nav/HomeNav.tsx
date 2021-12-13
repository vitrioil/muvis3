import { FC } from 'react';

import { IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, MoonIcon, RepeatIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

import NavLink from './NavLink';

const HomeNav: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const navColor = useColorModeValue("brand.300", "brand.700");

    return (
        <Flex px={4} py={1} bg={navColor} borderRadius="xl" alignItems="center" justifyContent="space-between">
            <HStack as={"nav"}>
                <NavLink>Public</NavLink>
                <NavLink>About</NavLink>
            </HStack>
            <HStack>
                <IconButton onClick={toggleColorMode}
                            bg={navColor}
                            aria-label="Theme"
                            icon={colorMode === "light" ? <MoonIcon />:  <SunIcon />} borderRadius={50} />
                <IconButton bg={navColor} aria-label="Settings" icon={<SettingsIcon />} borderRadius={50} />
                <Menu>
                    <MenuButton>Profile</MenuButton>
                    <MenuList>
                        <MenuItem icon={<EditIcon />}>Profile</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Flex>
    )
}

export default HomeNav;