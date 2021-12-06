import { IconButton } from '@chakra-ui/button';
import { SettingsIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import NavLink from './NavLink';

const HomeNav: FC = () => {
    return (
        <Box px={4} bg="brand.800" m={4} borderRadius={10}>
            <Flex h={"50px"} alignItems="center" justifyContent="space-between">
                <HStack as={"nav"}>
                    <NavLink>Public</NavLink>
                    <NavLink>About</NavLink>
                </HStack>
                <HStack>
                    <IconButton aria-label="Settings" icon={<SettingsIcon />} borderRadius={50} />
                </HStack>
            </Flex>
        </Box>
    )
}

export default HomeNav;