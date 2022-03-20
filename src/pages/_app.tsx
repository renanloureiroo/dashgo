import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { SidebarDrawerContextProvider } from "../contexts/SidebarDrawerContext"
import { queryCliente } from "../services/queryClient"

import { makeServer } from "../services/mirage"

import { theme } from "../styles/theme"

if (process.env.NODE_ENV === "development") {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryCliente}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerContextProvider>
          <Component {...pageProps} />
        </SidebarDrawerContextProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
