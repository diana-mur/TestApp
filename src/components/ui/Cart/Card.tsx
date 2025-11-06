import type React from "react";
import type { CardProps } from "../../../types/index";
import "./Card.css"

const Card: React.FC<CardProps> = ({title, image, textImage, text}) => {
    return (
        <div className="card">
            <div className="card-image">
                <div className="card-image-circle"></div>
                <img className="card-image-img" src={image} alt={textImage} />
            </div>
            <h3 className="card-title">{title}</h3>
            <div className="card-line"></div>
            <p className="card-text">{text}</p>
        </div>
    );
};

export default Card;