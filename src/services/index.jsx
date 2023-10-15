import { BsFillGridFill, BsWalletFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import {
  BiMoney,
  BiMoneyWithdraw,
  BiTargetLock,
  BiTransfer,
} from "react-icons/bi";

export const sidebarLinks = [
  {
    icon: <BsFillGridFill className="h-5 w-5" />,
    title: "overview",
    path: "/",
  },
  {
    icon: <BsWalletFill className="h-5 w-5" />,
    title: "balances",
    path: "/",
  },
  {
    icon: <BiTransfer className="h-5 w-5" />,
    title: "transctions",
    path: "/",
  },
  {
    icon: <BiMoney className="h-5 w-5" />,
    title: "bills",
    path: "/",
  },
  {
    icon: <BiMoneyWithdraw className="h-5 w-5" />,
    title: "expenses",
    path: "/",
  },
  {
    icon: <BiTargetLock className="h-5 w-5" />,
    title: "goals",
    path: "/",
  },
  {
    icon: <AiFillSetting className="h-5 w-5" />,
    title: "settings",
    path: "/",
  },
];
