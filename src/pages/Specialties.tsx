import { ReactNode, useEffect, useState } from "react"
import { getAllSpecialties } from "../services/specialties"
import { TableComponent } from "../components/Table"
import See from "../assets/icons/see.png"
import Edit from "../assets/icons/edit.png"
import Delete from "../assets/icons/Delete.png"
import { useNavigate, useParams } from "react-router-dom"

type SpecialtiesRow = {
  name: string
  enabled: ReactNode
  actions: ReactNode
}

const Specialties = () => {
  const [specialties, setSpecialties] = useState<SpecialtiesRow[]>([])
  const [currentTab, setCurrentTab] = useState<
    "TODOS" | "MEDICO" | "CONTRATANTE"
  >("MEDICO")

  const tableColumns = ["Nome especialidade", "Situação", "Ações"]

  const navigate = useNavigate()

  const exemploRedirectDeCreate = () => {
    navigate(`/planos/criar/${currentTab}`)

    // Você acessa esse valor na sua página de criação a partir do
    const params = useParams()
    params.tipo
  }

  useEffect(() => {
    const fetchSpecialties = async () => {
      const result = await getAllSpecialties()
      const specialtiesFormatted = result?.reduce(
        (accumulator, currentValue) => {
          const specialty = {
            name: currentValue.name,
            enabled: (
              <div>
                <input type="checkbox" checked={currentValue.enabled} />
                <label>{currentValue.enabled ? "Ativo" : "Inativo"}</label>
              </div>
            ),
            actions: (
              <div>
                <button
                  onClick={() =>
                    navigate(`especialidades/visualizar/${currentValue.id}`)
                  }
                >
                  <img src={See} />
                </button>
                <button
                  onClick={() =>
                    navigate(`especialidades/editar/${currentValue.id}`)
                  }
                >
                  <img src={Edit} />
                </button>
                <button onClick={() => {}}>
                  <img src={Delete} />
                </button>
              </div>
            ),
          }
          return [...accumulator, specialty]
        },
        [] as SpecialtiesRow[]
      )
      setSpecialties(specialtiesFormatted ?? [])
    }

    fetchSpecialties()
  }, [navigate])

  return (
    <>
      <TableComponent HeadColumns={tableColumns} BodyRow={specialties} />
    </>
  )
}

export default Specialties
