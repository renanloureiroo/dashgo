import { Stack } from "@chakra-ui/react"
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink title="Dashboard" icon={RiDashboardLine} />
        <NavLink title="Usuários" icon={RiContactsLine} />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink title="Formulários" icon={RiInputMethodLine} />
        <NavLink title="Automação" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  )
}
