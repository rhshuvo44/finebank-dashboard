import { sidebarLinks } from "../services";

const Sidebar = () => {
  return (
    <div className="p-4 w-60  text-center min-h-full bg-[#191919]">
      <h2 className="text-white mb-10 font-bold text-3xl">FINEbank.IO</h2>
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
    </div>
  );
};

export default Sidebar;
