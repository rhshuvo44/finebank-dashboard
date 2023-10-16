import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mt-20 flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
