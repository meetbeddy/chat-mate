import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Index';
import LandingPage from '../pages/LandingPage';
import PersonalAssistant from '../modules/PersonalAssistant';
import ColdEmail from '../modules/ColdEmail';
import AIFinancialAdvisor from '../modules/AIFinancialAdvisor';
import WritingAssistant from '../modules/WritingAssistant';
import CustomerSupportAI from '../modules/CustomerSupportAI';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <LandingPage /> },
            { path: "/assistant", element: <PersonalAssistant /> },
            { path: "/cold-email", element: <ColdEmail /> },
            { path: "/financial-advisor", element: <AIFinancialAdvisor /> },
            { path: "/writing-assistant", element: <WritingAssistant /> },
            { path: "/customer-support", element: <CustomerSupportAI /> },
        ],
    },
]);
