import { AxiosResponse } from "axios"
import api from "./api"

type SpecialtiesApi = Pagination & {
  content: {
    id: number
    name: string
    enabled: boolean
  }[]
}

export const getAllSpecialties = async () => {
  try {
    const token = localStorage.getItem("token")
    const result: AxiosResponse<SpecialtiesApi> = await api.get(
      "/specialties",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return result.data.content
  } catch (error) {
    console.log(error)
  }
}
