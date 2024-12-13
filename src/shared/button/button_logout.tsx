"use client"
import { useAppContext } from "@/app/app_provider"
import { Button } from "@/components/ui/button"
import React from "react"

const ButtonLogout = () => {
  const { setSessionToken } = useAppContext()
  const handleLogoutAccount = async () => {
    try {
      const response = await fetch(`/api/account/logout`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      const data = await response.json()
      if (data.status === 200) {
        setSessionToken("")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Button onClick={handleLogoutAccount} variant={"default"}>
      Logout
    </Button>
  )
}

export default ButtonLogout
