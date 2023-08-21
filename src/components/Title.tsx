type TitleProps = {
  value: string | number
}

const Title = ({ value }: TitleProps) => (
  <div>
    <h1>{value}</h1>
  </div>
)

export default Title
