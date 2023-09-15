type CardProps = {
  title: string
  content: string
  onClickExclude: () => void
}

const Card = ({ title, content, onClickExclude }: CardProps) => (
  <div>
    <h5>{title}</h5>
    <p>{content}</p>
    <button onClick={onClickExclude}>Excluir</button>
  </div>
)

export default Card
