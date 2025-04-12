import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from './ThemeContext'; 
import Logo from "../../public/Logo.png";



function Layout() {
  const { t, i18n } = useTranslation();
  const { darkMode, setDarkMode } = useTheme(); 

  const tabs = [
    { name: t("ime"), path: "/" },
    { name: t("Proekt"), path: "/project" },
    { name: t("Contact"), path: "/contact" },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="container mx-auto p-4 max-w-6xl min-w-0 w-full transition-all duration-300">
      <div className={`rounded-2xl p-12 transition-all duration-300 min-h-screen flex flex-col ${darkMode ? "bg-[#27272A] text-white" : "bg-[#F8F9FA] text-black"}`}>
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-14" />

          <div className="hidden md:flex justify-center">
            <div className={`flex p-2 rounded-full transition-all duration-300  ${darkMode ? "bg-black" : "bg-gray-200 shadow-inner"}`}>
              {tabs.map((tab) => (
                <NavLink key={tab.name} to={tab.path}
                  className={({ isActive }) => `px-4 py-1 rounded-full transition-all duration-300 ${darkMode ? "text-white hover:text-teal-400" : "text-black hover:text-teal-700"} ${isActive ? (darkMode ? "bg-[#3a3a3d]" : "bg-white") : ""}` } > {tab.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className={`flex items-center gap-4 rounded-3xl px-3 py-2 ${darkMode ? "bg-[#3a3a3d] shadow-inner" : "bg-gray-200 shadow-inner"}`}>
            <button onClick={() => setDarkMode(!darkMode)} className="mr-2">
              <i className={darkMode ? "bi bi-brightness-high hover:text-teal-700" : "bi bi-moon text-black hover:text-teal-700"}></i>
            </button>

            <div className="relative inline-block">
              <button onClick={() => { document.getElementById("popover-1").classList.toggle("hidden"); }}>
                <i className="bi bi-translate hover:text-teal-700"></i>
              </button>

              <ul id="popover-1" className={`absolute mt-2 hidden rounded-md shadow-lg border border-white ${darkMode ? "bg-black" : "bg-gray-200 shadow-inner"}`}>
                <li className="cursor-pointer">
                  <button className="w-full text-left px-2 hover:text-teal-700" onClick={() => i18n.changeLanguage("en")}>
                    EN
                  </button>
                </li>
                <li className="cursor-pointer">
                  <button className="w-full text-left px-2 hover:text-teal-700" onClick={() => i18n.changeLanguage("ru")}>
                    RU
                  </button>
                </li>
                <li className="cursor-pointer">
                  <button className="w-full text-left px-2 hover:text-teal-700" onClick={() => i18n.changeLanguage("jp")}>
                    JP
                  </button>
                </li>
                <li className="cursor-pointer">
                  <button className="w-full text-left px-2 hover:text-teal-700" onClick={() => i18n.changeLanguage("uz")}>
                    UZ
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-6 flex justify-center">
          <div className={`flex p-2 rounded-full transition-all duration-300 ${darkMode ? "bg-black" : "bg-gray-200 shadow-inner"}`}>
            {tabs.map((tab) => (
              <NavLink
                key={tab.name}
                to={tab.path}
                className={({ isActive }) => `px-4 py-1 rounded-full transition-all duration-300 ${darkMode ? "text-white hover:text-teal-400" : "text-black hover:text-teal-700"} ${isActive ? (darkMode ? "bg-[#3a3a3d]" : "bg-white") : ""}`}
              >
                {tab.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex-grow mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
