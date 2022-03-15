import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { createContext, ReactNode, useContext, useEffect } from "react"

type SidebarDrawerContextProps = UseDisclosureReturn

interface SidebarDrawerProviderProps {
  children: ReactNode
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps)

const SidebarDrawerContextProvider = ({
  children,
}: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure()

  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

const useSidebarDrawer = () => useContext(SidebarDrawerContext)

export { SidebarDrawerContextProvider, useSidebarDrawer }
