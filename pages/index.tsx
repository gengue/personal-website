/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import { Link, useTheme } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Section from "../components/Section";
import getCornerStyles from "../utils/getCornerStyles";

const AboutMe = () => {
  return (
    <Section alt>
      <Heading as="h2" color="cyberpunk.500" mb={6} size="2xl">
        About me
      </Heading>
      <Stack spacing={5} fontSize="lg">
        <Text>
          Genesis Guerrero Martínez was born in Santa Marta, Colombia. Since
          2014 I have developed many types of web applications and building
          tools to help businesses grow.
        </Text>
        <Text>
          I share my experience in web development, frontend research, open
          source and developer lifestyle on Twitter with people seeking guidance
          in the tech industry.
        </Text>
        <Text>
          It's my pleasure to have been named a Python Ambassador in Colombia
          and participated as speaker in the NodeJS school day.
        </Text>
        <Text>
          Currently, I am a Software Architect at{" "}
          <Link
            href="https://www.venturatravel.org/"
            isExternal
            color="cyberpunk.500"
          >
            Ventura TRAVEL.
          </Link>
        </Text>
      </Stack>
    </Section>
  );
};

const WhatICanDo = () => {
  return (
    <Section>
      <Flex justify="space-between" mb={8} flexWrap="wrap">
        <Heading as="h3" maxW="200px" size="xl" mb={[6, 0, 0, 0]}>
          8+ years of experience
        </Heading>
        <Stack spacing={[0, 1, 2]}>
          <Text fontSize="2xl">Software Development</Text>
          <Text fontSize="2xl">IT consultant</Text>
          <Text fontSize="2xl">Performance Engineering</Text>
        </Stack>
      </Flex>
      <Box>
        <Heading as="h3" size="xl" mb={4}>
          What I can do
        </Heading>
        <Stack spacing={4}>
          <Text fontSize="lg">
            A freelance software engineer specialized in both front-end and
            back-end web development with solid experience in building scalable
            products. I can bring your ideas to life with code or help you to
            improve your existing product.
          </Text>
          <Text fontWeight={600}>
            #NodeJS #Python #TypeScript #NextJS #ReactJS #SolidJS #Postgres
            #NoSQL #Django #Hasura #PWA #AWS #GCP #Golang #ReactNative #GraphQL
          </Text>
        </Stack>
      </Box>
    </Section>
  );
};

const RandomFacts = () => {
  return (
    <Section alt>
      <Heading as="h2" color="cyberpunk.500" mb={6} size="2xl">
        Random facs
      </Heading>
      <UnorderedList fontSize="lg">
        <ListItem>I drink a lot of coffee</ListItem>
        <ListItem>I'm into rock and metal music</ListItem>
        <ListItem>I love craft beer, especially IPAs</ListItem>
        <ListItem>Play the bass guitar is my zen time</ListItem>
        <ListItem>I'm sListItemghtly addicted to Call of Duty: Mobile</ListItem>
        <ListItem>I'm currently learning Web3 and Golang</ListItem>
        <ListItem>I like anime, Berserk is my favorite</ListItem>
        <ListItem>I am open to participate in early-stage startups</ListItem>
        <ListItem>
          I'm a veteran Vim user, check my{" "}
          <Link
            href="https://github.com/gengue/dotfiles"
            isExternal
            color="cyberpunk.500"
          >
            dotfiles
          </Link>
          .
        </ListItem>
      </UnorderedList>
    </Section>
  );
};

const cornerStyles = {
  backgroundColor: "#000",
  //backgroundColor: "#fcee09",
  //borderBottom: "2px solid #000",
  //borderBottom: "2px solid #fcee09",
  borderBottom: "2px solid #fff",
  bottom: "-12px",
  height: "23px",
  right: "-12px",
  transform: "rotate(135deg)",
  width: "23px",
};

const MetaData = () => {
  return (
    <>
      <title>Genesis Guerrero</title>
      <meta
        name="description"
        content="Genesis Guerrero Martinez is a Software Engineer & Open Source enthusiast based in Norway, with rock-solid experience in building complex applications with modern technologies"
      />
      <meta
        name="keywords"
        content="Genesis Alberto Guerrero Martinez,Santa Marta,Colombia,Software Developer,programmer,Norway,Web Developer, beer"
      />
      <meta name="author" content="Genesis Guerrero" />
      <meta property="og:title" content="Genesis Guerrero Martinez" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="https://i.imgur.com/PwGn1hg.jpg" />
      <meta
        property="og:description"
        content="Genesis Guerrero Martinez is a Software Engineer & Open Source enthusiast based in Norway, with rock-solid experience in building complex applications with modern technologies"
      />
      <meta property="og:type" content="article" />
      <meta
        name="google-site-verification"
        content="OFQHcTJEaaf4sDj5EfqvwdlH3542ks9AZARNQ_KIzMY"
      />
      <meta name="theme-color" content="#fcee09" />
    </>
  );
};

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <MetaData />
      </Head>
      <main>
        <Hero />
        <AboutMe />
        <WhatICanDo />
        <RandomFacts />
        <Section alt customStyles={{ pt: 2 }}>
          <Flex
            border="2px solid #fff"
            position="relative"
            justifyItems="center"
            alignItems="center"
            justify="space-between"
            py={8}
            px={6}
            flexWrap="wrap"
          >
            <Heading as="h2" mr={4} size="lg">
              I write, sometimes
            </Heading>
            <Box>
              <Text fontSize="xl" mb={4}>
                About web development and life.
              </Text>
              <Button alt>Read my articles</Button>
            </Box>
            <Box
              {...getCornerStyles(
                {
                  bg: "black",
                  border: `2px solid white`,
                },
                "bottom"
              )}
              style={{ position: "absolute" }}
            />
          </Flex>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
