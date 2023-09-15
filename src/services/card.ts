import { AxiosResponse } from "axios"
import api from "./config"

export const GetCards = async () => {
  try {
    const token = localStorage.getItem("token")
    const cards: AxiosResponse<CardType[]> = await api.get("/api/card", {
      headers: { Authorization: token },
    })

    return cards.data
  } catch (error) {
    console.log(error)
  }
}

export const DeleteCard = async (id: string) => {
  try {
    const token = localStorage.getItem("token")
    const newCards: AxiosResponse<CardType[]> = await api.delete(
      `/api/card/${id}`,
      {
        headers: { Authorization: token },
      }
    )

    return newCards.data
  } catch (error) {
    console.log(error)
    return false
  }
}

export const ChangeColumn = async (newColumn: Column, id: string) => {
  try {
    const token = localStorage.getItem("token")
    const newCards: AxiosResponse<CardType[]> = await api.put(
      `/api/card/${id}`,
      {
        column: newColumn,
      },
      {
        headers: { Authorization: token },
      }
    )

    return newCards.data
  } catch (error) {
    console.log(error)
    return false
  }
}

// colunas possiveis: TODO, DOING E DONE
// ESCRITOS DESSA FORMA E COM LETRAS MAIUSCULAS!!!
