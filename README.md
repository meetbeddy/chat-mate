# ChatMate Frontend

**ChatMate** is a virtual assistant app that provides users with multiple AI-driven modules, including Personal Assistance, Cold Email, and AI Finance, among others. It is designed to be user-friendly, responsive, and provide a smooth, intuitive user interface.

## Features

### 1. **User Authentication**
   - Authentication is handled using **Firebase**, allowing users to register, log in, and log out securely.
   - Firebase authentication is integrated using environment variables for Firebase configuration.
   - The app conditionally renders navigation items based on whether the user is logged in.

### 2. **Multiple AI-Powered Modules**
   - **Personal Assistant**: Helps users perform general tasks using AI.
   - **Cold Email Writer**: Assists users in writing professional cold emails with AI.
   - **AI Finance**: Provides financial insights using AI-powered tools.
   - Each module is encapsulated in its own React component, ensuring separation of concerns and modular design.

### 3. **API Usage Tracking**
   - API usage is tracked per user, and limits are applied based on the user's current plan.
   - The API usage data is fetched from the backend and displayed in the user profile dropdown.
   - Visual progress bars show API usage limits and the number of requests left.

### 4. **Responsive UI**
   - Built with **Tailwind CSS** and **DaisyUI**, the app is fully responsive and works on both mobile and desktop.
   - The navigation automatically collapses on smaller screens with a menu icon, providing a clean mobile experience.

### 5. **Theming & UI Components**
   - **DaisyUI** components like buttons, modals, and dropdowns are used for consistent and attractive styling.
   - The **TopNav** component includes dynamic profile management, including showing the user's current plan, usage, and profile information.
   - The use of **SweetAlert2** ensures that alerts, modals, and pop-ups are sleek and well-integrated into the app's theme.

### 6. **Markdown Support**
   - AI responses from modules are rendered using **ReactMarkdown**, which ensures proper formatting for messages, code, and other structured content.

## Technologies Used

- **React**: Core framework for building the frontend.
- **TypeScript**: Adds static typing for easier development and fewer runtime errors.
- **React Router**: Handles navigation between pages like Home, About, and modules.
- **Tailwind CSS & DaisyUI**: For styling the app, making it highly customizable and responsive.
- **React Icons**: Provides icons used throughout the app for navigation and interaction.
- **Firebase Authentication**: Handles user authentication (login, signup, and logout).
- **dayjs**: Used for date formatting when displaying API usage or timestamps.

## Project Structure

```
src/
├── assets/               # Static images and assets
├── components/           # Reusable React components (Nav, Footer, etc.)
├── hooks/                # Custom React hooks (useAuth, useApiUsage, etc.)
├── pages/                # Pages of the app (Home, About, etc.)
├── App.tsx               # Main app component and routing setup
├── main.tsx             # Entry point for React app
├── tailwind.config.js    # Tailwind CSS configuration
└── ...
```

### Key Components

1. **TopNav**
   - A responsive navigation bar that adapts to whether the user is logged in or not.
   - Shows different items in the menu for authenticated users, including profile details and API usage.
   - Uses **react-icons** for a clean, modern look.

2. **Module Components**
   - Each AI module is represented by a separate React component, allowing users to interact with AI in different ways (personal assistant, email writer, etc.).
   - Each module reuses a `ModuleInteraction` component for handling user input, API interaction, and displaying AI responses.

3. **Auth Components**
   - **Login** and **Signup** pages use Firebase authentication to manage user credentials.
   - Authentication status is shared across components via a custom `useAuth` hook.

4. **Profile & Usage**
   - The user's profile shows their current API usage and subscription plan, displayed in the navigation dropdown.
   - A visual progress bar tracks the remaining API requests for the user's plan.

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/username/chatmate-frontend.git
cd chatmate-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and configure the following environment variables:

```bash
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
REACT_APP_OPENAI_API_KEY=your-openai-api-key
```

### 4. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Usage

1. **Login/Signup**: Start by creating an account or logging in with an existing Firebase user.
2. **Navigate through modules**: Once logged in, users can explore different AI modules for personal assistance, email writing, and more.
3. **Track API usage**: The profile dropdown shows current plan details and remaining API requests.

## Future Improvements

- **Subscription Plans**: Integrate a page where users can upgrade their plan to increase API usage limits.
- **Additional Modules**: Add more AI-powered features, such as language translation or data analysis.

## Conclusion

This project was created as a fun exploration of AI-driven conversations and user interactions, combining modern technologies like React, TypeScript, and Tailwind CSS. It showcases how to integrate Firebase for authentication and OpenAI for generating intelligent responses.
