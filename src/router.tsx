import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { ItemDetailScreen } from "./screens/ItemDetailScreen";
import { ItemEditScreen } from "./screens/ItemEditScreen";
import  CreateItemScreen  from "./screens/CreateItemScreen";
import DeleteItemScreen from "./screens/DeleteItemScreen";


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
              {
                path: "items/:isbn/edit",
                element: <ItemEditScreen />,
              },
              {
                path: "/CreateItemScreen",
                element: <CreateItemScreen />,
              }, 
              {
                path: "/DeleteItemScreen",
                element: <DeleteItemScreen />,
              }, 
        ],
    }
]);
