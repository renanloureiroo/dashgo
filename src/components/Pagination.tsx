import { Button, HStack } from "@chakra-ui/react"

const Pagination = () => {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Button
        size="s"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        1
      </Button>

      <Button
        size="s"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{
          bg: "gray.500",
        }}
      >
        2
      </Button>

      <Button
        size="s"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{
          bg: "gray.500",
        }}
      >
        3
      </Button>

      <Button
        size="s"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{
          bg: "gray.500",
        }}
      >
        4
      </Button>
    </HStack>
  )
}

export default Pagination
