import { useState } from "react"
import "./App.css"

function App() {
  const [nome, setNome] = useState("")
  const [endereco, setEndereco] = useState({
    logradouro: "",
    numero: 0,
    bairro: "",
  })

  return (
    <form>
      <input value={nome} onChange={(event) => setNome(event.target.value)} />
      <input
        value={endereco.logradouro}
        onChange={(event) =>
          setEndereco({ ...endereco, logradouro: event.target.value })
        }
      />
      <p>{nome}</p>
    </form>
  )
}

export default App
