import type { RootState } from "../../../store";
import type React from "react";
import { useSelector } from "react-redux";
import Button from "../../ui/Button/HeaderButton/headerButton";
import { useState } from "react";
import Modal from "../../ui/Modal/modal";
import { userLogout } from "../../../hooks/userLogout";
import logo from "../../../assets/logo.svg";
import "./Header.css"

const Header: React.FC = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleLogout = userLogout();

    const handleModalClick = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <header>
                <div className="header-logo">
                    <a href="/">
                        <img src={logo} alt="Логотип" />
                    </a>
                </div>
                <div className="header-right">
                    <a className="header-right-link" href="/contacts">Контакты</a>
                    {isAuthenticated ? <Button text="Выйти" onClick={handleLogout} /> : <Button text="Войти" onClick={handleModalClick} />}
                </div>
            </header>
            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClick}
                title="Авторизация"
            />
        </>
    );
};

export default Header;