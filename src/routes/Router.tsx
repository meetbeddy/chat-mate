import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Index';
import LandingPage from '../pages/LandingPage';
import PersonalAssistant from '../modules/PersonalAssistant';
import ColdEmail from '../modules/ColdEmail';
import AIFinancialAdvisor from '../modules/AIFinancialAdvisor';
import WritingAssistant from '../modules/WritingAssistant';
import CustomerSupportAI from '../modules/CustomerSupportAI';
import NotFound from '../pages/NotFound';
import SignupPage from '../pages/auth/SignUpPage';
import LoginPage from '../pages/auth/SignInPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <LandingPage /> },
            { path: "/signup", element: <SignupPage /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/assistant", element: <PersonalAssistant /> },
            { path: "/cold-email", element: <ColdEmail /> },
            { path: "/financial-advisor", element: <AIFinancialAdvisor /> },
            { path: "/writing-assistant", element: <WritingAssistant /> },
            { path: "/customer-support", element: <CustomerSupportAI /> },

            { path: "*", element: <NotFound /> }
        ],
    },
]);
