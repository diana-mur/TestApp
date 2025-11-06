import type React from "react";

export interface User {
    id: number;
    login: string;
    password: string;
    name: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean
}

export interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
    id?: number;
    title: string;
    image: string;
    textImage: string;
    text: string;
}

export interface JsonData {
    users: User[];
    cards: CardProps[];
}

export interface InputProps {
    name: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    minLength?: number | undefined;
    placeholder: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: (user: User) => void;
    title?: string;
}