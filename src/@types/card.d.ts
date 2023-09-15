type Column = "TODO" | "DOING" | "DONE"

type CardType = {
  _id: string
  title: string
  content: string
  column: Column
  userId: string
}
