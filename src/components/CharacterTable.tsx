import { useCallback, useEffect, useState } from "react"

type Character = {
  id: number
  name: string
  status: string
  species: string
  gender: string
}

const CharacterTable = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [sort, setSort] = useState<"ASC" | "DESC">("ASC")
  const [search, setSearch] = useState("")

  const sortCharacters = useCallback(
    (charactersToSort: Character[]) => {
      return charactersToSort.sort((first, second) => {
        if (first.name > second.name) {
          return sort === "ASC" ? 1 : -1
        }
        if (first.name < second.name) {
          return sort === "ASC" ? -1 : 1
        }
        return 0
      })
    },
    [sort]
  )

  useEffect(() => {
    const fetchData = async () => {
      const apiCharacters = await (
        await fetch(`https://rickandmortyapi.com/api/character?name=${search}`)
      ).json()
      setCharacters(
        sortCharacters(
          apiCharacters.results.map((apiCharacter: any) => ({
            id: apiCharacter.id,
            name: apiCharacter.name,
            status: apiCharacter.status,
            species: apiCharacter.species,
            gender: apiCharacter.gender,
          }))
        )
      )
    }
    fetchData()
  }, [search, sortCharacters])

  useEffect(() => {
    console.log("Sort está mudando", sort)
  }, [sort])

  return (
    <div>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th>Espécie</th>
            <th>Gênero</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr>
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.species}</td>
              <td>{character.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setSort(sort === "ASC" ? "DESC" : "ASC")}>
        Change Sort
      </button>
    </div>
  )
}

export default CharacterTable
