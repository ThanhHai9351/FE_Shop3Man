import { NextResponse } from "next/server"

export async function DELETE() {
  const response = NextResponse.json({ status: 200, message: "Logged out and cookies removed" })

  response.cookies.set("accessToken", "", { maxAge: 0, path: "/", httpOnly: true, secure: true, sameSite: "strict" })
  response.cookies.set("refreshToken", "", { maxAge: 0, path: "/", httpOnly: true, secure: true, sameSite: "strict" })

  return response
}
