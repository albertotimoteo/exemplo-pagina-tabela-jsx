import { Dispatch, SetStateAction, useEffect, useState } from "react"

type HookReturn = [
  string | undefined,
  Dispatch<SetStateAction<string | undefined>>
]

export const useLocalStorage = (
  key: string,
  initialValue?: string
): HookReturn => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? storedValue : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, value ?? "")
  }, [key, value])

  return [value, setValue]
}
