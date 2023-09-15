import { AxiosResponse, isAxiosError } from "axios"
import api from "./config"

type LoginApi = {
  token: string
  name: string
}

export const LoginService = async (email: string, password: string) => {
  try {
    const userData: AxiosResponse<LoginApi> = await api.post(
      "/api/user/login",
      {
        email,
        password,
      }
    )

    const token = userData.data.token
    const userName = userData.data.name

    localStorage.setItem("token", token)
    api.defaults.headers.Authorization = token
    return userName
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 404) {
        return "Usuário não encontrado"
      }
      if (error.status === 401) {
        return "Senha incorreta"
      }
    }
  }
}
