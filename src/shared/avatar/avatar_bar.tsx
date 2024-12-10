"use client"
import React, { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAppContext } from "@/app/app_provider"

const AvatarBar = () => {
  const { sessionToken } = useAppContext()
  const [avatar, setAvatar] = useState<string | null>(null)
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BEHOST}/user/me`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${sessionToken}`,
          },
        })
        const data = await response.json()
        setAvatar(data.data.avata)
      } catch (error) {
        console.log(error)
      }
    }
    if (sessionToken.length) {
      getUser()
    } else {
      setAvatar("")
    }
  }, [sessionToken])
  return (
    <Avatar>
      <AvatarImage src={avatar ? avatar : "https://github.com/shadcn.png"} alt='@shadcn' />
      <AvatarFallback>US</AvatarFallback>
    </Avatar>
  )
}

export default AvatarBar
