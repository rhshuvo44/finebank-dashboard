import { BiLogOut } from "react-icons/bi";
import { sidebarLinks } from "../services";
import User from "./User";

const Sidebar = () => {
  return (
    <div className="p-4 w-60 relative text-center min-h-full bg-[#191919]">
      <div className="fixed top-5 left-0 right-0 bg-[#191919]">
        <h2 className="text-white  font-bold text-3xl">FINEbank.IO</h2>
      </div>
      <ul className="menu mt-16">
        {/* Sidebar content here */}
        {sidebarLinks.map(({ path, icon, title }) => (
          <li key={path} className="py-2">
            <a className="text-white capitalize opacity-75 hover:text-white hover:opacity-100 hover:bg-primary ">
              {icon}
              {title}
            </a>
          </li>
        ))}
      </ul>
      <button className="btn w-full bg-[#ffffff14] text-white capitalize border-0 mt-16 mb-10 hover:bg-primary justify-start">
        <BiLogOut className="h-5 w-5" />
        Logout
      </button>
      <div className="divider" />
      <div className="user-info">
        <User />
      </div>
    </div>
  );
};

export default Sidebar;
