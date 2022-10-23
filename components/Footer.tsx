//import Image from "next/image";
import { Box, Flex, Container, Text, Link, HStack } from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box as="footer" bg="cyberpunk.100" py={12}>
      <Container
        maxW="3xl"
        display="flex"
        flexWrap="wrap"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <Text mr={4}>Find me on</Text>
        <HStack spacing={6} fontSize="4xl">
          <Link href="https://twitter.com/geneguer" isExternal>
            <AiOutlineTwitter />
          </Link>
          <Link href="https://www.linkedin.com/in/genesis-guerrero/" isExternal>
            <AiFillLinkedin />
          </Link>

          <Link href="https://github.com/gengue" isExternal>
            <AiOutlineGithub />
          </Link>

          <Link href="https://www.instagram.com/genesis.codes/ isExternal">
            <AiOutlineInstagram />
          </Link>
        </HStack>
        <Text as="small" w="100%" my={6}>
          Copyright © 2022 Genesis Guerrero. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
