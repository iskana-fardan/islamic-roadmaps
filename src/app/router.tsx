import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            // {
            //     path: "/",
            //     element: <NotFoundPage />
            // },
        ]
    }
])