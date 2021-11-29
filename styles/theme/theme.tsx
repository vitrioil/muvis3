import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import Button from './custom/Button';
import Input from './custom/Input';
import Container from './custom/Container';
import FormControl from './custom/FormControl';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "brand.900",
                color: "white"
            }
        },
    },
    components: {
        Button,
        Input,
        Container,
        FormControl,
    },
    colors: {
        brand: {
            50: '#e1f2ff',
            100: '#b3d6ff',
            200: '#83bbfc',
            300: '#54a0fb',
            400: '#2d85fa',
            500: '#1c6be1',
            600: '#1253b0',
            700: '#093c7e',
            800: '#00244d',
            900: '#000c1e',
        }
    },
    fonts: {
        body: 'Montserrat',
        heading: 'Montserrat'
    },
    fontWeight: {
        100:100,
        200:200,
        300:300,
        400:400,
        500:500,
        600:600,
        700:700,
        800:800,
        900:900,
    }
},
withDefaultColorScheme({
    colorScheme: 'brand'
}))

export default theme