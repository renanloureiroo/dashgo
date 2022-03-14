import { Icon, Text, Link } from "@chakra-ui/react"

interface NavLinkProps {
  title: string
  icon: any
}

export const NavLink = ({ title, icon }: NavLinkProps) => {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  )
}
