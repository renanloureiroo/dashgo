import { Flex, Box, Avatar, Text } from "@chakra-ui/react"

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Renan Loureiro</Text>
        <Text color="gray.300" fontSize="small">
          renan@gmail.com
        </Text>
      </Box>

      <Avatar
        name="Renan Loureiro"
        src="https://www.github.com/renanloureiroo.png"
        size="md"
      />
    </Flex>
  )
}
