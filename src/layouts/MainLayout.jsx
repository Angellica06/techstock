import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} />

      <button
        className="bg-primary-light text-surface rounded-r-full h-10 mt-4 shadow-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <MdKeyboardArrowLeft size={22} />
        ) : (
          <MdKeyboardArrowRight size={22} />
        )}
      </button>

      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
