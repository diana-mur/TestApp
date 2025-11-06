import type React from "react";
import RedButton from "../../components/ui/Button/RedButton/redButton";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import WhiteButton from "../../components/ui/Button/WhiteButton/whiteButton";
import { useNavigate } from "react-router-dom";
import cards from "../../data/data.json"
import Card from "../../components/ui/Cart/Card";
import type { JsonData } from "../../types";
import Modal from "../../components/ui/Modal/modal";
import { useState } from "react";
import { userLogout } from "../../hooks/userLogout";
import "./MainPage.css"

const MainPage: React.FC = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = userLogout();

    const handleContacts = () => {
        navigate('/contacts');
    };

    const handleModalClick = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="home">
            <div className="home-title">
                <h1>Место для получения <br /> медицинской помощи</h1>
                <div className="home-buttons">
                    {isAuthenticated
                        ? <RedButton text="Выйти" onClick={handleLogout} />
                        : <RedButton text="Войти" onClick={handleModalClick} />
                    }
                    <WhiteButton text="Контакты" onClick={handleContacts} />
                </div>
            </div>

            <div className="home-menu">
                {(cards as JsonData).cards?.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        image={card.image}
                        textImage={card.image}
                        text={card.text}
                    />
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClick}
                title="Авторизация"
            />
        </div>
    )
}

export default MainPage;