import { useLocation } from "react-router-dom"

const UserDetails = () => {
  const { state: user } = useLocation()

  return (
    <div>
      <h1>Dados do usuário</h1>
      <p>{user.id}</p>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.phone}</p>
    </div>
  )
}

export default UserDetails
