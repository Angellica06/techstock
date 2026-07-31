import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
