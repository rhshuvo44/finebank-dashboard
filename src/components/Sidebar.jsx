import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../services";
import User from "./User";

const Sidebar = () => {
  return (
    <div className="p-4 w-60 text-center min-h-full bg-[#191919]">
      <ul className="menu mt-20">
        {/* Sidebar content here */}
        {sidebarLinks.map(({ path, icon, title }) => (
          <li key={path} className="py-2">
            <NavLink
              to={path}
              className="text-white capitalize opacity-75 hover:text-white hover:opacity-100 hover:bg-primary focus:opacity-100 focus:bg-primary focus:text-white"
            >
              {icon}
              {title}
            </NavLink>
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
