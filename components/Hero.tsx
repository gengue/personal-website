/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  Link,
  useTheme,
} from "@chakra-ui/react";
import Button from "./Button";
import getCornerStyles from "../utils/getCornerStyles";

const Corners = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        {...getCornerStyles(
          {
            bg: theme.colors.cyberpunk[100],
            border: `3px solid black`,
          },
          "bottom"
        )}
        style={{ position: "absolute" }}
      />
      <Box
        {...getCornerStyles(
          {
            bg: theme.colors.cyberpunk[100],
            border: `3px solid black`,
          },
          "top"
        )}
        style={{ position: "absolute" }}
      />
    </>
  );
};

const Hero = () => {
  return (
    <Box bg="cyberpunk.100" py={16}>
      <Container maxW="4xl">
        <Flex
          direction={["column", "row", "row"]}
          justifyItems="center"
          alignItems="center"
        >
          <Image
            src="/me.jpeg"
            alt="Genesis Guerreros's picture"
            height="500px"
            width="500px"
            objectFit="cover"
            objectPosition="center"
            style={{
              borderRadius: "50%",
            }}
          />
          <Box m={6}>
            <Heading as="h1" size="4xl" mb={2}>
              Hi, I'm Genesis
            </Heading>
            <Text fontSize="2xl" mb={8}>
              A Software Engineer & Open Source enthusiast based in Norway, with
              rock-solid experience in building complex applications with modern
              technologies
            </Text>
            <Link
              href="https://twitter.com/messages/compose?recipient_id=178417991"
              isExternal
              _hover={{
                textDecoration: "none",
              }}
            >
              <Button>Chat with me →</Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
