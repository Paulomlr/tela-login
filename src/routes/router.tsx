import { createHashRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createHashRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> }
]);