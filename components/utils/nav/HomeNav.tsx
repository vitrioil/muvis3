import { IconButton } from '@chakra-ui/button';
import { MoonIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import NavLink from './NavLink';

const HomeNav: FC = () => {
    return (
        // <Box px={4} bg="brand.800" borderRadius={10}>
            <Flex px={4} py={1} bg="brand.700" borderRadius={10} alignItems="center" justifyContent="space-between">
                <HStack as={"nav"}>
                    <NavLink>Public</NavLink>
                    <NavLink>About</NavLink>
                </HStack>
                <HStack>
                    <IconButton bg="brand.700" aria-label="Theme" icon={<MoonIcon />} borderRadius={50} />
                    <IconButton bg="brand.700" aria-label="Settings" icon={<SettingsIcon />} borderRadius={50} />
                </HStack>
            </Flex>
        // </Box>
    )
}

export default HomeNav;