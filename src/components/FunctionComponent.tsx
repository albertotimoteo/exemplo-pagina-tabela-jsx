import { useEffect, useState } from "react"

function FunctionComponent() {
  const [frase, setFrase] = useState("Hello World!")

  // Quando o componente monta, a função callback do primeiro parâmetro
  // irá rodar.
  // Quando alguma variável do meu vetor de dependências muda de valor, a função
  // callback do primeiro parâmetro também irá rodar, novamente.
  useEffect(() => {
    console.log("Componente atualizou")
    const newFrase = `Hello ${Math.random()}`
    console.log(newFrase)
    // setFrase(newFrase) // Isto vai provocar um loop infinito
  }, [frase])

  useEffect(() => {
    console.log("Componente montou")
  }, [])

  return (
    <div>
      <p>{frase}</p>
      <button onClick={() => setFrase("Teste")}>Trocar Frase</button>
    </div>
  )
}

export default FunctionComponent
