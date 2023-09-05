import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { User, users } from "../assets/users"

const UserDetails = () => {
  const [userDetail, setUserDetail] = useState<User>({} as User)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const foundUser = users.find((user) => user.id === Number(id))
      foundUser ? setUserDetail(foundUser) : navigate("/users")
    }
  }, [id, navigate])

  return (
    <>
      <h3>Detalhes do usuário: </h3>
      <p>{userDetail.nome}</p>
      <p>{userDetail.idade}</p>
      <p>{userDetail.email}</p>
      <p>{userDetail.cidade}</p>
      <Link to="/users">Voltar à lista</Link>
      <button onClick={() => navigate("/")}>Ir à home</button>
    </>
  )
}

export default UserDetails
