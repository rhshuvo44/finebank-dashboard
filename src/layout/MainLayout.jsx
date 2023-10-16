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
        <div className="drawer-content bg-base-100 mt-28 mb-10  px-5">
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
