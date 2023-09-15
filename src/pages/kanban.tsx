import { useEffect, useState } from "react"
import { DeleteCard, GetCards } from "../services/card"
import Card from "../components/card"

const Kanban = () => {
  const [cards, setCards] = useState<CardType[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      const apiCards = await GetCards()
      if (apiCards) {
        setCards(apiCards)
      }
    }

    fetchCards()
  }, [])

  const onDeleteCard = async (id: string) => {
    const newCards = await DeleteCard(id)
    if (newCards) {
      setCards(newCards)
    }
  }

  return (
    <div>
      {cards.map((card) => (
        <Card
          title={card.title}
          content={card.content}
          onClickExclude={() => onDeleteCard(card._id)}
        />
      ))}
    </div>
  )
}

export default Kanban
