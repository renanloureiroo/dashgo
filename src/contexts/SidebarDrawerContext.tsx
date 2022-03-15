import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react"
import { createContext, ReactNode, useContext } from "react"

type SidebarDrawerContextProps = UseDisclosureReturn

interface SidebarDrawerProviderProps {
  children: ReactNode
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps)

const SidebarDrawerContextProvider = ({
  children,
}: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure()

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

const useSidebarDrawer = () => useContext(SidebarDrawerContext)

export { SidebarDrawerContextProvider, useSidebarDrawer }
