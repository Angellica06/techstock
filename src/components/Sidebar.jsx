import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaRegChartBar } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { LuTags } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

function Sidebar({ isOpen }) {
  return (
    <aside
      className={`bg-primary min-h-screen py-3 flex flex-col transition-all duration-300 ${
        isOpen ? "w-60" : "w-20"
      }`}
    >
      <div
        className={`flex items-center p-4 ${
          isOpen ? "justify-center gap-2" : "justify-center"
        }`}
      >
        <img className="w-10" src={Logo} alt="logo" />
        {isOpen && (
          <h2 className="text-surface text-2xl font-semibold">TechStock</h2>
        )}
      </div>

      <hr className="text-surface mx-4" />

      <nav className="p-4">
        <ul className="flex flex-col gap-1">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center ${
                  isOpen ? "gap-2 px-4" : "justify-center px-0"
                } text-surface text-lg py-2 rounded-lg ${
                  isActive ? "bg-[#4C69BB]" : "hover:bg-[#4C69BB]"
                }`
              }
            >
              <FaRegChartBar size={20} />
              {isOpen && <span>Dashboard</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/produtos"
              className={({ isActive }) =>
                `flex items-center ${
                  isOpen ? "gap-2 px-4" : "justify-center px-0"
                } text-surface text-lg py-2 rounded-lg ${
                  isActive ? "bg-[#4C69BB]" : "hover:bg-[#4C69BB]"
                }`
              }
            >
              <BiPackage size={20} />
              {isOpen && <span>Produtos</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categorias"
              className={({ isActive }) =>
                `flex items-center ${
                  isOpen ? "gap-2 px-4" : "justify-center px-0"
                } text-surface text-lg py-2 rounded-lg ${
                  isActive ? "bg-[#4C69BB]" : "hover:bg-[#4C69BB]"
                }`
              }
            >
              <LuTags size={20} />
              {isOpen && <span>Categorias</span>}
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-auto p-4">
        <div
          className={`flex items-center mb-3 ${
            isOpen ? "gap-2 px-4" : "justify-center"
          }`}
        >
          <FaRegUserCircle className="text-surface" size={22} />
          {isOpen && <p className="text-surface font-medium">Administrador</p>}
        </div>

        <hr className="my-3 border-surface/20" />

        <div
          className={`flex items-center text-surface text-lg py-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 ${
            isOpen ? "gap-2 px-4" : "justify-center"
          }`}
        >
          <FiLogOut size={20} />

          {isOpen && <NavLink to="/">Sair</NavLink>}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
