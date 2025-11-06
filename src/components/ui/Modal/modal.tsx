import type React from "react"
import type { ModalProps } from "../../../types/index.ts"
import { useEffect, useState } from "react";
import "./modal.css"
import Input from "../Input/input";
import RedButton from "../Button/RedButton/redButton";
import usersData from "../../../data/data.json";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../store/authSlice.ts";
import { useNavigate } from "react-router-dom";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleLogin = () => {
        setError('');

        if (login.length < 3 || password.length < 8) {
            setError('Логин мин. 3 символа, пароль мин. 8 символов');
            return;
        }

        const user = usersData.users.find(u => u.login === login && u.password === password);

        if (user) {
            dispatch(loginSuccess(user))
            onClose();
            setLogin('');
            setPassword('');
            navigate('/profile')
        } else {
            setError('Неверный логин или пароль');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    {title && <h2 className="modal-title">{title}</h2>}
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                <form className="modal-body">
                    <Input
                        type="text"
                        name="login"
                        placeholder="Логин"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <div className="error-message">{error}</div>}
                    <RedButton
                        text="Войти"
                        onClick={handleLogin}
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
}

export default Modal;