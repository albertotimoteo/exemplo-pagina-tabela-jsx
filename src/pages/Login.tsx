import { useState } from "react"
import { login } from "../services/users"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const doLogin = async () => {
    const result = await login(email, password)

    if (result) {
      navigate("especialidades")
    }
  }

  return (
    <div>
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={doLogin}>Entrar</button>
    </div>
  )
}

export default Login
