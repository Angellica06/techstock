import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaRegChartBar } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { LuTags } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="bg-primary w-60 min-h-screen py-3 flex flex-col">
      <div className="flex justify-center gap-2 items-center p-4">
        <img className="w-10" src={Logo} alt="logo" />
        <h2 className="text-surface text-center text-2xl font-semibold">
          TechStock
        </h2>
      </div>

      <hr className="text-surface mx-4" />

      <nav className="p-4">
        <ul className="flex flex-col gap-1">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 text-surface text-lg py-2 px-4 rounded-lg ${
                  isActive ? "bg-[#4C69BB]" : "hover:bg-[#4C69BB]"
                }`
              }
            >
              <FaRegChartBar size={20} />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/produtos"
              className={({ isActive }) =>
                `flex items-center gap-2 text-surface text-lg py-2 px-4 rounded-lg ${
                  isActive ? "bg-[#4C69BB]" : "hover:bg-[#4C69BB]"
                }`
              }
            >
              <BiPackage size={20} />
              Produtos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categorias"
              className={({ isActive }) =>
                `flex items-center gap-2 text-surface text-lg py-2 px-4 rounded-lg ${
                  isActive ? "bg-[#4C69BB]" : "hover:bg-[#4C69BB]"
                }`
              }
            >
              <LuTags size={20} />
              Categorias
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-auto p-4">
        <div className="flex items-center gap-2 px-4 mb-3">
          <FaRegUserCircle className="text-surface" size={22} />
          <p className="text-surface font-medium">Administrador</p>
        </div>

        <hr className="my-3 border-surface/20" />

        <div className="flex items-center gap-2 text-surface text-lg py-2 px-4 transition-transform duration-300 hover:scale-105 cursor-pointer">
          <FiLogOut size={20} />
          <NavLink to="/">Sair</NavLink>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
