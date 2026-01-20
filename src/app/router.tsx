import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            // {
            //     path: "/",
            //     element: <AboutPage />
            // },
            // {
            //     path: "/",
            //     element: <NotFoundPage />
            // },
        ]
    }
])