import { useState } from "react"
import { LoginService } from "../services/user"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const doLogin = async () => {
    const result = await LoginService(email, password)
    if (result) {
      navigate("kanban")
    }
  }

  return (
    <>
      <label>
        Login
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button onClick={doLogin}>Fazer Login</button>
    </>
  )
}

export default Login
