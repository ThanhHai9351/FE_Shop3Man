"use client"

import React, { type FC } from "react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import type { IAccount } from "@/lib/types"

interface AvatarProp {
  avatar: string
}

const AvatarBar: FC<AvatarProp> = ({ avatar }) => {
  return (
    <Avatar>
      <AvatarImage src={avatar} />
    </Avatar>
  )
}

export default AvatarBar
