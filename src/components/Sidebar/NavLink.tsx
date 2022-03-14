import { Icon, Text, Link, LinkProps } from "@chakra-ui/react"
import { ElementType } from "react"

interface NavLinkProps extends LinkProps {
  title: string
  icon: ElementType
}

export const NavLink = ({ title, icon, ...rest }: NavLinkProps) => {
  return (
    <Link {...rest} display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  )
}
