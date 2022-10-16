import { Button, useTheme, WithCSSVar } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";

type Props = {
  children: string | JSX.Element | React.ReactElement | React.ReactElement[];
  alt?: boolean;
};

const getLeftCornerStyle = (alt: boolean, theme: WithCSSVar<Dict<any>>) => ({
  position: "absolute",
  content: '""',
  width: "0px",
  height: "0px",
  borderBottom: `14px solid ${alt ? "black" : theme.colors.cyberpunk[100]}`,
  borderRight: "14px solid transparent",
  bottom: "0px",
  left: "0px",
});

const getRightCornerStyle = (alt: boolean, theme: WithCSSVar<Dict<any>>) => ({
  position: "absolute",
  content: '""',
  width: "0px",
  height: "0px",
  borderTop: `14px solid ${alt ? "black" : theme.colors.cyberpunk[100]}`,
  borderLeft: "14px solid transparent",
  top: "0px",
  right: "0px",
});

const CyberButton = ({ children, alt = false }: Props) => {
  const theme = useTheme();

  return (
    <Button
      size="lg"
      bg="cyberpunk.900"
      position="relative"
      border="none"
      borderRadius="none"
      _before={getLeftCornerStyle(alt, theme)}
      _after={getRightCornerStyle(alt, theme)}
      _hover={{
        color: "black",
        bg: "white",
      }}
    >
      {children}
    </Button>
  );
};

export default CyberButton;
