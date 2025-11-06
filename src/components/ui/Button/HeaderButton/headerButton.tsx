import type React from "react"
import type { ButtonProps } from "../../../../types"
import "./headerButton.css"

const HeaderButton: React.FC<ButtonProps> = ({text, onClick}) => {
    return (
        <button className="header-button" onClick={onClick}>{text}</button>
    )
}

export default HeaderButton