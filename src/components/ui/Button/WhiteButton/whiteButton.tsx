import type React from "react"
import type { ButtonProps } from "../../../../types"
import "./whiteButton.css"

const WhiteButton: React.FC<ButtonProps> = ({text, onClick}) => {
    return (
        <button className="whiteButton" onClick={onClick}>{text}</button>
    )
}

export default WhiteButton