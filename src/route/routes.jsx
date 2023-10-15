import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Login />,
  // },
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);

export default router;
