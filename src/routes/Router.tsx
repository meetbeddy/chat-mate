
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Index';
import LandingPage from '../pages/LandingPage';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <LandingPage /> },

        ],
    },
]);

