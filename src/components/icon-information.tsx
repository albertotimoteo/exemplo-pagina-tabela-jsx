import { ReactNode } from "react"
import { styled } from "styled-components"

type IconInformationProps = {
  icon: ReactNode
  color: string
}

const IconContainer = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 80px;
  height: 80px;
`

const IconInformation = ({ icon, color }: IconInformationProps) => {
  return <IconContainer color={color}>{icon}</IconContainer>
}

export default IconInformation
