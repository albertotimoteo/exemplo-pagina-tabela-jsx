import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function UserInfo() {
  const { name, email } = useContext(UserContext)

  return (
    <>
      <img />
      <p>{name}</p>
      <p>{email}</p>
    </>
  )
}

export default UserInfo
