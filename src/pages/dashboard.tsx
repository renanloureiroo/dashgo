import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react"
import dynamic from "next/dynamic"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-14T00:00:00.00Z",
      "2022-03-15T00:00:00.00Z",
      "2022-03-16T00:00:00.00Z",
      "2022-03-17T00:00:00.00Z",
      "2022-03-18T00:00:00.00Z",
      "2022-03-19T00:00:00.00Z",
      "2022-03-20T00:00:00.00Z",
    ],
  },
  colors: [theme.colors.cyan[500]],

  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}
const series = [{ name: "series1", data: [10, 20, 30, 50, 5, 3, 10] }]

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
})

const Dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>

            <Chart type="area" height={160} series={series} options={options} />
          </Box>

          <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} series={series} options={options} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard
1
