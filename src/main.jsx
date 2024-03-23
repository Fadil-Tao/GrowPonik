import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Dashboard from './pages/Dashboard,.jsx';
import BaseLayout from './layout/BaseLayout.jsx';
import CoursePage from './pages/CoursePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Learning from './pages/Learning.jsx';
import MentorshipPage from './pages/MentorshipPage.jsx';
import PricePage from './pages/PricePage.jsx';
import MentorListPage from './pages/MentorListPage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';

const router = createBrowserRouter([
    {
        path: '',
        element: <BaseLayout />,
        children: [
            {
                path: '',
                element: <LandingPage />,
            },
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'learning',
                element: <Learning />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'mentor/mentorList',
                element: <MentorListPage />,
            },
            {
                path: 'dashboard/:DashboardFitur',
                element: <div>HELLO WORLD</div>,
            },
            {
                path: '',
                element: '',
            },
            {
                path: '/mentor',
                element: <MentorshipPage />,
            },
            {
                path: 'langganan',
                element: <PricePage />,
            },
            {
                path: 'komunitas',
                element: <CommunityPage />,
            },
        ],
    },
    {
        path: 'learning/:IdLearning/',
        element: <CoursePage />,
    },
    {
        path: 'learning/:IdLearning/:index',
        element: <CoursePage />,
    },
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: 'register',
        element: <RegisterPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
