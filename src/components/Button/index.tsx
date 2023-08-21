import { ReactNode } from "react"

const textStyle = {
  border: "none",
  background: "none",
}

const outlinedStyle = {
  border: "1px solid black",
  background: "none",
}

const getStyle = (variant: "contained" | "outlined" | "text") => {
  if (variant === "text") {
    return textStyle
  }
  if (variant === "outlined") {
    return outlinedStyle
  }
  return {}
}

type ButtonProps = {
  variant: "contained" | "outlined" | "text"
  onClick: () => void
  children: ReactNode
}

const Button = ({ variant, children, onClick }: ButtonProps) => (
  <button style={getStyle(variant)} onClick={onClick}>
    {children}
  </button>
)

export default Button
