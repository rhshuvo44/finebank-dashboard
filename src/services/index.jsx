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
    icon: <BsFillGridFill />,
    title: "overview",
    path: "/",
  },
  {
    icon: <BsWalletFill />,
    title: "balances",
    path: "/",
  },
  {
    icon: <BiTransfer />,
    title: "transctions",
    path: "/",
  },
  {
    icon: <BiMoney />,
    title: "bills",
    path: "/",
  },
  {
    icon: <BiMoneyWithdraw />,
    title: "expenses",
    path: "/",
  },
  {
    icon: <BiTargetLock />,
    title: "goals",
    path: "/",
  },
  {
    icon: <AiFillSetting />,
    title: "settings",
    path: "/",
  },
];
