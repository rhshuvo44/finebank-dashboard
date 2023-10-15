import { BiLogOut } from "react-icons/bi";
import { sidebarLinks } from "../services";

const Sidebar = () => {
  return (
    <div className="p-4 w-60  text-center min-h-full bg-[#191919]">
      <h2 className="text-white mb-6 font-bold text-3xl">FINEbank.IO</h2>
      <ul className="menu">
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
      <button className="btn w-full bg-[#ffffff14] text-white capitalize border-0 mt-5 hover:bg-primary justify-start">
        <BiLogOut className="h-5 w-5" />
        Logout
      </button>
      <div className="divider" />
    </div>
  );
};

export default Sidebar;
