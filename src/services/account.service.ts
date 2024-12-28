import configs from "@/lib/config"

export const getUserFromToken = async (token: string) => {
  try {
    if (token.length === 0) {
      return null
    }

    const response = await fetch(`${configs.HOST}/api/user/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json; charset=UTF-8",
      },
    })

    if (!response.ok) {
      console.error(`Server returned ${response.status}: ${response.statusText}`)
      return null
    }

    try {
      const data = await response.json()
      return data?.data || null
    } catch (jsonError) {
      console.error("Failed to parse JSON:", jsonError)
      return null
    }
  } catch (err) {
    console.error("Error fetching user:", err)
    throw err
  }
}
