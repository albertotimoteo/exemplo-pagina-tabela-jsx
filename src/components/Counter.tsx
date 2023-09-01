import { useCallback, useEffect, useState } from "react"

// initialValue = 0

const Counter = ({ initialValue }: { initialValue: number }) => {
  const [counter, setCounter] = useState(initialValue)
  const [secondCounter, setSecondCounter] = useState(0)

  const handleAlertClick = useCallback(() => {
    setTimeout(() => {
      alert(counter)
    }, 3000)
  }, [counter])

  // handleAlertClick foi recriada porque não é um useCallback
  // Toda vez que ela é recriada, ela dispara o efeito do useEffect
  // Pois ela é uma das variáveis que estão no array de dependências do
  // useEffect

  useEffect(() => {
    console.log(counter, "rodou a função do alert")
    handleAlertClick()
  }, [counter, handleAlertClick])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={handleAlertClick}>Alerta</button>
      <p>{secondCounter}</p>
      <button onClick={() => setSecondCounter(secondCounter + 1)}>
        Increment second counter
      </button>
    </div>
  )
}

export default Counter
