import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import MainLayout from "../layout/MainLayout";
import Balance from "../pages/Balance";
import AccountDetails from "../pages/AccountDetails";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Login />,
  // },
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
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "balance",
        element: <Balance />,
      },
      {
        path: "balance/balance-detail/:id",
        element: <AccountDetails />,
      },
    ],
  },
]);

export default router;
