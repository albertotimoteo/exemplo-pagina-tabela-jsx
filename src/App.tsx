import Table from "./components/Table"

const data = [
  {
    user: "Luiza Souza",
    age: 1,
    actions: <button>Clique aqui</button>,
    email: "luiza@gmail.com",
    whatsapp: "31 98673-2322",
    specialty: "Pediatria",
    city: "Contagem",
    uf: "MG",
    userType: "Médico",
  },
  {
    user: "João Silva",
    email: "joao@gmail.com",
    whatsapp: "41 98765-4321",
    specialty: "Ortopedia",
    city: "Curitiba",
    uf: "PR",
    userType: "Médico",
  },
  {
    user: "Maria Santos",
    email: "maria@gmail.com",
    whatsapp: "11 98765-1234",
    specialty: "Ginecologia",
    city: "São Paulo",
    uf: "SP",
    userType: "Médico",
  },
  {
    user: "Pedro Rocha",
    email: "pedro@gmail.com",
    whatsapp: "21 98888-5555",
    specialty: "Cardiologia",
    city: "Rio de Janeiro",
    uf: "RJ",
    userType: "Contratante",
  },
]

const columns = [
  "Usuário",
  "E-mail",
  "WhatsApp",
  "Especialidade",
  "Cidade",
  "Estado",
  "Tipo de usuário",
]

function App() {
  return (
    <>
      <Table columns={columns} data={data} />
    </>
  )
}

export default App
