import { useEffect } from "react"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { getAllCharacters } from "./services/characters"
import { StyledLink } from "./components/styles"

function App() {
  const [username, setUsername] = useLocalStorage("username")

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      {username}
      <StyledLink to="/"></StyledLink>
    </>
  )
}

export default App
