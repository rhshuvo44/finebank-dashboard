import { BiLogOut } from "react-icons/bi";
import { sidebarLinks } from "../services";
import User from "./User";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-4 w-60 text-center min-h-full bg-[#191919]">
      {/* <div className="bg-[#191919]">
        <h2 className="text-white  font-bold text-3xl">FINEbank.IO</h2>
      </div> */}
      <ul className="menu mt-20">
        {/* Sidebar content here */}
        {sidebarLinks.map(({ path, icon, title }) => (
          <li key={path} className="py-2">
            <Link
              to={path}
              className="text-white capitalize opacity-75 hover:text-white hover:opacity-100 hover:bg-primary focus:opacity-100 focus:bg-primary focus:text-white"
            >
              {icon}
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="btn w-full bg-[#ffffff14] text-white capitalize border-0 mt-16 mb-10 hover:bg-primary justify-start">
        <BiLogOut className="h-5 w-5" />
        Logout
      </button>
      <div className="divider" />
      <User />
    </div>
  );
};

export default Sidebar;
