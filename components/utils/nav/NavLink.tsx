import { ReactNode } from "react";
import { Link } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.700', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default NavLink;