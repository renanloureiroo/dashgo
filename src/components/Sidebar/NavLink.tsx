import { Icon, Text, Link as ChakraLink, LinkProps } from "@chakra-ui/react"
import { ElementType } from "react"

import Link from "next/link"
interface NavLinkProps extends LinkProps {
  title: string
  icon: ElementType
  href: string
}

export const NavLink = ({ title, icon, href, ...rest }: NavLinkProps) => {
  return (
    <Link href={`/${href}`} passHref>
      <ChakraLink {...rest} display="flex" alignItems="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </Link>
  )
}
