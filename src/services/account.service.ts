import configs from "@/lib/config"

export const getUserFromToken = async (token: string) => {
  try {
    if (token.length === 0) {
      return null
    }
    const response = await fetch(`${configs.HOST}/user/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
    const data = await response.json()

    if (!data) {
      return null
    }
    return data.data
  } catch (err) {
    console.error("Error fetching user:", err)
    throw err
  }
}
