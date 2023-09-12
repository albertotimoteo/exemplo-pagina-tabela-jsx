import { AxiosResponse, isAxiosError } from "axios"
import api from "./config"

type GetAllCharactersApi = {
  info: {
    count: number
    next: string
    pages: number
    previous: string
  }
  // Tipagem está incompleta! É só um exemplo
  results: {
    id: number
    name: string
  }[]
}

export const getAllCharacters = async () => {
  try {
    const characters: AxiosResponse<GetAllCharactersApi> = await api.get(
      "/character"
    )

    console.log(characters.data)
    return characters.data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.code)
    }
  }
}
