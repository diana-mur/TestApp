import React from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './store';
import Profile from './pages/Profile/Profile';
import Contacts from './pages/Contacts/Contacts';
import Header from './components/layout/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import './App.css';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.user?.name);
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <MainPage />
      </>
    ),
  },
  {
    path: '/contacts',
    element: (
      <>
        <Header />
        <Contacts />
      </>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Header />
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;