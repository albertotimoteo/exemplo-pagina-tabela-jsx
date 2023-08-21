import "./App.css"
import Button from "./components/Button"

function App() {
  return (
    <>
      <Button variant="text" onClick={() => {}}>
        Botão text
      </Button>
      <Button variant="outlined" onClick={() => {}}>
        Botão outlined
      </Button>
      <Button variant="contained" onClick={() => {}}>
        Botão contained
      </Button>
    </>
  )
}

export default App
