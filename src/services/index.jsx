import { AiFillSetting } from "react-icons/ai";
import {
  BiMoney,
  BiMoneyWithdraw,
  BiTargetLock,
  BiTransfer,
} from "react-icons/bi";
import { BsFillGridFill, BsWalletFill } from "react-icons/bs";

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
    path: "/transaction",
  },
  {
    icon: <BiMoney className="h-5 w-5" />,
    title: "bills",
    path: "/bill",
  },
  {
    icon: <BiMoneyWithdraw className="h-5 w-5" />,
    title: "expenses",
    path: "/expenses",
  },
  {
    icon: <BiTargetLock className="h-5 w-5" />,
    title: "goals",
    path: "/goals",
  },
  {
    icon: <AiFillSetting className="h-5 w-5" />,
    title: "settings",
    path: "/setting",
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

export const expensesData = [
  {
    name: "Jan",
    current: 400,
    previous: 240,
  },
  {
    name: "Feb",
    current: 300,
    previous: 139,
  },
  {
    name: "Mar",
    current: 200,
    previous: 980,
  },
  {
    name: "Apr",
    current: 278,
    previous: 390,
  },
  {
    name: "May",
    current: 189,
    previous: 480,
  },
  {
    name: "Jun",
    current: 239,
    previous: 380,
  },
  {
    name: "July",
    current: 349,
    previous: 430,
  },
  {
    name: "Aug",
    current: 349,
    previous: 430,
  },
  {
    name: "Sep",
    current: 349,
    previous: 430,
  },
  {
    name: "Oct",
    current: 349,
    previous: 430,
  },
  {
    name: "Nov",
    current: 349,
    previous: 430,
  },
  {
    name: "Dec",
    current: 349,
    previous: 430,
  },
];
