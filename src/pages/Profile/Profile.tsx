import type React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import RedButton from "../../components/ui/Button/RedButton/redButton";
import { userLogout } from "../../hooks/userLogout";
import WhiteButton from "../../components/ui/Button/WhiteButton/whiteButton";
import { useNavigate } from "react-router-dom";
import "./Profile.css"

const Profile: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const handleLogout = userLogout();

    const handleContacts = () => {
        navigate('/contacts');
    };

    return (
        <div className="profile">
            <div className="profile-title">
                <h1>Привет, {user?.name}</h1>
            </div>
            <div className="profile-buttons">
                <RedButton text="Выйти из аккаунта" onClick={handleLogout} />
                <WhiteButton text="Перейти в контакты" onClick={handleContacts} />
            </div>
        </div>
    )
}

export default Profile;