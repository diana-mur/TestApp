import type React from "react"
import type { InputProps } from "../../../types"

const Input: React.FC<InputProps> = ({ type, name, minLength, placeholder, value, onChange }) => {
    return (
        <input type={type} name={name} minLength={minLength} placeholder={placeholder} value={value} onChange={onChange}/>
    )
}

export default Input