import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Index';
import LandingPage from '../pages/LandingPage';
import PersonalAssistant from '../modules/PersonalAssistant';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <LandingPage /> },
            { path: "/assistant", element: <PersonalAssistant /> },

        ],
    },
]);
