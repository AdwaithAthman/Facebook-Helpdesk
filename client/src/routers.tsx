import { Navigate, createBrowserRouter } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import App from "./App";


export const appRouter = createBrowserRouter([
{
   path: "/",
   element: <App /> ,
   children: [
        { path: "/", element: <Navigate to="/dashboard" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
   ]
}
])