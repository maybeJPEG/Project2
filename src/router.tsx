import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { ItemDetailScreen } from "./screens/ItemDetailScreen";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorScreen />,
        children: [
            {
                path: "/AboutScreen", 
                element: <AboutScreen />,
            },
            {
                path: "books/:isbn",
                element: <ItemDetailScreen />,
              },
        ],
    }
]);
