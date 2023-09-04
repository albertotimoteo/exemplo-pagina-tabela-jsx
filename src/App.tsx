import { useState } from "react"
import BaseLayout from "./components/BaseLayout"
import { UserContext } from "./contexts/UserContext"

function App() {
  const [userInfo, setUserInfo] = useState({
    name: "Rafael Pimenta",
    email: "rafael@gmail.com",
  })

  const changeUserInfo = () => {
    setUserInfo({ ...userInfo, email: "teste@teste.com" })
  }

  return (
    <>
      <UserContext.Provider
        value={{ name: userInfo.name, email: userInfo.email }}
      >
        <BaseLayout />
        <button onClick={changeUserInfo}>Clique</button>
      </UserContext.Provider>
    </>
  )
}

export default App
