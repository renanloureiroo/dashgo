import { Flex, useBreakpointValue } from "@chakra-ui/react"

import { Logo } from "./Logo"
import { Notifications } from "./Notifications"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}