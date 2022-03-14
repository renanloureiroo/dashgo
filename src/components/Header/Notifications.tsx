import { HStack, Icon } from "@chakra-ui/react"
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri"

export const Notifications = () => {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon fontSize="20" as={RiNotificationLine} />
      <Icon fontSize="20" as={RiUserAddLine} />
    </HStack>
  )
}
