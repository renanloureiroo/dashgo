import { Box, Stack, useBreakpointValue } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

const Pagination = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Stack
      direction={isWideVersion ? "row" : "column"}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem isCurrent number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  )
}

export default Pagination
