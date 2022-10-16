import { Box, Container } from "@chakra-ui/react";

type Props = {
  children: string | JSX.Element | React.ReactElement | React.ReactElement[];
  alt?: boolean;
  customStyles?: any;
};

const skewedStyles = {
  //position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "black",
  zIndex: 0,
  transform: "skewY(2deg)",
  transformOrigin: "top right",
};

export const Skewed = () => {
  return <Box {...skewedStyles} style={{ position: "absolute" }} />;
};

const Section = ({ children, alt = false, customStyles = {} }: Props) => {
  const styles = alt
    ? { bg: "black", color: "white" }
    : { bg: "cyberpunk.100" };
  return (
    <Box py={14} {...styles} {...customStyles} as="section" position="relative">
      <Container maxW="2xl" position="relative" zIndex={1}>
        {children}
      </Container>
    </Box>
  );
};

export default Section;
