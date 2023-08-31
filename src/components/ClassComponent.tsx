import React from "react"

/**
 * Montagem - componentDidMount, render
 * Atualizações - render, componentDidUpdate
 * Desmontagem - componentWillUnmount
 */

class ClassComponent extends React.Component {
  state = {
    frase: "Hello World!",
  }

  componentDidMount(): void {
    // this.setState({ frase: "Hello World!" })
    console.log("Componente montou")
  }

  componentDidUpdate(): void {
    console.log("Componente atualizou")
  }

  componentWillUnmount(): void {
    console.log("Componente vai desmontar")
  }

  render() {
    return (
      <div>
        <p>{this.state.frase}</p>
        <button onClick={() => this.setState({ frase: "Teste" })}>
          Trocar Frase
        </button>
      </div>
    )
  }
}

export default ClassComponent
