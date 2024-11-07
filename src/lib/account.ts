export const getUserFromToken = async (token: string) => {
    try {
        if(token.length === 0)
        {
            return null;
        }
      const response = await fetch(`${process.env.NEXT_PUBLIC_BEHOST}/user/me`, {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json; charset=UTF-8", 
        },
      });
      const data = await response.json();
      
      if (!data) {
        return null;
      }
      return data;
    } catch (err) {
      console.error("Error fetching user:", err);
      throw err;
    }
  };
  