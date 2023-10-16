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
    path: "/balance",
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

export const balancesCards = [
  {
    id: 1,
    accountType: "Credit Card",
    accountName: "Master Card",
    accountNumber: "3388 4556  8860 8***",
    amount: "2500",
  },
  {
    id: 2,
    accountType: "Investment",
    accountName: "AB Bank Ltd",
    accountNumber: "3388 4556 8860 8***",
    amount: "2500",
  },
  {
    id: 3,
    accountType: "Credit Card",
    accountName: "Master Card",
    accountNumber: "3388 4556  8860 8***",
    amount: "2500",
  },
  {
    id: 4,
    accountType: "Credit Card",
    accountName: "Master Card",
    accountNumber: "3388 4556  8860 8***",
    amount: "2500",
  },
  {
    id: 5,
    accountType: "Credit Card",
    accountName: "Master Card",
    accountNumber: "3388 4556  8860 8***",
    amount: "2500",
  },
  {
    id: 6,
    accountType: "Credit Card",
    accountName: "Master Card",
    accountNumber: "3388 4556  8860 8***",
    amount: "2500",
  },
];
