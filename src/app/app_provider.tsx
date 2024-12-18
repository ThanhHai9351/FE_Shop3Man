"use client"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext({
  sessionToken: "",
  setSessionToken: (sessionToken: string) => {},
})

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used withthin an AppProvider!")
  }
  return context
}

const AppProvider = ({
  children,
  initialSessionToken,
}: {
  children: React.ReactNode
  initialSessionToken?: string
}) => {
  const [sessionToken, setSessionToken] = useState(initialSessionToken || "")
  const router = useRouter()
  useEffect(() => {
    router.refresh()
  }, [sessionToken])
  return <AppContext.Provider value={{ sessionToken, setSessionToken }}>{children}</AppContext.Provider>
}

export default AppProvider
