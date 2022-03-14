import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react"
import { createContext, ReactNode } from "react"

type SidebarDrawerContextProps = UseDisclosureReturn

interface SidebarDrawerProviderProps {
  children: ReactNode
  disclosure: SidebarDrawerContextProps
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps)

export const SidebarDrawerContextProvider = ({
  children,
}: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure()

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
