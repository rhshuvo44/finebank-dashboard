import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Header = () => {
  const date = new Date();
  console.log(date.toDateString());
  return (
    <div className="navbar bg-[#191919] text-white fixed top-0  z-50 px-10">
      <div className="navbar-start w-72">
        <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <Link to="/" className="text-white  font-bold text-3xl">
          FINEbank.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center px-8">
          <h3 className="font-bold text-3xl capitalize text-primary mr-3">
            Hello Ripon
          </h3>
          <BiChevronsRight className="text-[#9F9F9F]" />
          <p className="text-[#9F9F9F]"> {date.toDateString()}</p>
        </div>
      </div>
      <div className="navbar-end w-full">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="form-control hidden md:flex">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
