import type { NextPage } from 'next'

import { Grid, GridItem, Box } from '@chakra-ui/layout';

const Login: NextPage = () => {
    return (
        <Grid templateColumns="1fr 2fr" h="100vh" spacing={4} gap={4} justifyContent="center">
            <GridItem>
                <Box bg="brand.700" h="890px" w="600px" borderRadius="20px">
                </Box>
            </GridItem>
            <GridItem>
            </GridItem>
        </Grid>
    )
}

export default Login;