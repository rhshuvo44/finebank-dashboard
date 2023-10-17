import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import MainLayout from "../layout/MainLayout";
import Balance from "../pages/Balance";
import AccountDetails from "../pages/AccountDetails";
import Transaction from "../pages/Transaction";
import Bill from "../pages/Bill";
import Expenses from "../pages/Expenses";
import Goals from "../pages/Goals";
import Setting from "../pages/Setting";

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
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "bill",
        element: <Bill />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "goals",
        element: <Goals />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

export default router;
