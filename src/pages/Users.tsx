import { useEffect, useState } from "react"
import { getAllUsers } from "../services/users"
import { useNavigate } from "react-router-dom"

const Users = () => {
  const [page, setPage] = useState(0)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getAllUsers(page)
      setUsers(result.content)
      setNumberOfPages(result.totalPages)
    }

    fetchUsers()
  }, [page])
  console.log(numberOfPages)
  return (
    <div>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => navigate("detalhe", { state: user })}>
              Acessar dados de {user.id} - {user.firstName}
            </button>
          </li>
        ))}
      </ol>
      <button
        onClick={() => page > 0 && setPage(page - 1)}
        disabled={page === 0}
      >
        Página Anterior
      </button>
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <button onClick={() => setPage(3)}>3</button>
      <button onClick={() => setPage(4)}>4</button>
      <button
        onClick={() => page < numberOfPages && setPage(page + 1)}
        disabled={page === numberOfPages - 1}
      >
        Próxima Página
      </button>
    </div>
  )
}

export default Users
