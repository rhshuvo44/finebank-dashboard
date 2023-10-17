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
    current: 4000,
    previous: 2400,
  },
  {
    name: "Feb",
    current: 3000,
    previous: 1398,
  },
  {
    name: "Mar",
    current: 2000,
    previous: 9800,
  },
  {
    name: "Apr",
    current: 2780,
    previous: 3908,
  },
  {
    name: "May",
    current: 1890,
    previous: 4800,
  },
  {
    name: "Jun",
    current: 2390,
    previous: 3800,
  },
  {
    name: "July",
    current: 3490,
    previous: 4300,
  },
  {
    name: "Aug",
    current: 3490,
    previous: 4300,
  },
  {
    name: "Sep",
    current: 3490,
    previous: 4300,
  },
  {
    name: "Oct",
    current: 3490,
    previous: 4300,
  },
  {
    name: "Nov",
    current: 3490,
    previous: 4300,
  },
  {
    name: "Dec",
    current: 3490,
    previous: 4300,
  },
];
