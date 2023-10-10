import api from "./api"

export const login = async (email: string, password: string) => {
  const result = await api.post(
    "/public/register/login",
    {},
    {
      params: {
        email,
        password,
      },
    }
  )

  if (result.data.message === "Successfully login") {
    localStorage.setItem("token", result.data.token)
    return true
  }

  return false
}
