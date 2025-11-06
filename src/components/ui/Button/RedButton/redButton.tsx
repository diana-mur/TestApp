import type React from "react"
import type { ButtonProps } from "../../../../types"
import "./redButton.css"

const RedButton: React.FC<ButtonProps> = ({text, onClick, type = 'button'}) => {
    return (
        <button className="redButton" onClick={onClick} type={type}>{text}</button>
    )
}

export default RedButton