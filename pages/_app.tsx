import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/chakra-petch/700.css";

const theme = extendTheme({
  colors: {
    cyberpunk: {
      100: "#fcee09",
      400: "#03ffd2",
      500: "#00f0ff",
      900: "#ff003c",
    },
  },
  fonts: {
    heading: `'Chakra Petch', 'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
