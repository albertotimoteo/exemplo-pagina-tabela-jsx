import { Link } from "react-router-dom"
import { users } from "../assets/users"

const Users = () => (
  <>
    <h2>Usuários do sistema: </h2>
    {users.map((user) => (
      <p>
        <Link to={`/users/${user.id}`} key={user.id}>
          {user.nome}
        </Link>
      </p>
    ))}
    <Link to="/">Voltar à home</Link>
  </>
)

export default Users
