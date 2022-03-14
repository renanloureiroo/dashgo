import { Flex, Input, Text, Icon, HStack } from "@chakra-ui/react"

import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"
import { Logo } from "./Header/Logo"
import { Notifications } from "./Header/Notifications"
import { Profile } from "./Header/Profile"
import { SearchBox } from "./Header/SearchBox"

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  )
}
