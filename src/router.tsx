import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {ErrorScreen} from "./components/ErrorScreen";
import {AboutScreen} from "./components/AboutScreen";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorScreen />,
        children: [
            {
            path: "components/AboutScreen", // matches: /about
            element: <AboutScreen />,
            },
            ],
    }
]);