import React, { useState } from "react";
import {
  IconBinaryTree,
  IconFeather,
  IconLayoutDashboard,
  IconLogout,
  IconMenu2,
  IconSettings2,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import Tooltip from "../../component/Tooltip";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      label: "Müşteriler",
      icon: <IconUsers className="w-5 h-5 min-w-5 min-h-5" />,
    },
    {
      label: "Varyantlar(Özellikler)",
      icon: <IconFeather className="w-5 h-5 min-w-5 min-h-5" />,
    },
    {
      label: "Katagoriler",
      icon: <IconBinaryTree className="w-5 h-5 min-w-5 min-h-5" />,
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-xl border-r rounded-r-2xl border-slate-200 transition-all ease-in-out-all duration-300 ease-in-out 
        ${isOpen ? "w-64" : "w-20"} flex flex-col`}
      >
        {/* Toggle */}

        <div className="!pb-3 !pt-4 !px-4 border-slate-200 mt-auto flex items-center justify-between truncate">
          <span
            className={`${
              isOpen ? "block" : "hidden"
            } !px-3 flex items-center font-medium text-lg text-slate-700`}
          >
            <IconLayoutDashboard className="w-5 h-5 min-w-5 min-h-5 !mr-3" />
            Yönetim
          </span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-3 ${
              isOpen ? "" : "justify-center"
            } !px-3 !py-2 text-sm !rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-slate-100 hover:text-slate-600`}
          >
            <div>
              {isOpen ? (
                <IconX className="w-5 h-5 min-w-5 min-h-5" />
              ) : (
                <IconMenu2 className="w-5 h-5 min-w-5 min-h-5" />
              )}
            </div>
          </button>
        </div>
        <div className="border-b border-slate-200 !mx-5"></div>
        {/* Menu */}
        <nav className="flex-1 !px-2 !py-4 space-y-2">
          {menuItems.map((item, idx) => (
            <Tooltip text={isOpen ? "" : item.label} position="right">
              <div key={idx} className=" !mt-auto !px-2 !mb-2 truncate">
                <button
                  className={`flex items-center gap-3 text-slate-500 ${
                    isOpen ? "" : "justify-center"
                  } !px-3 !py-2 w-full text-sm !rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-slate-100 hover:text-slate-600`}
                >
                  {item.icon}

                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    {item.label}
                  </span>
                </button>
              </div>
            </Tooltip>
          ))}
        </nav>
        <div className="border-b border-slate-200 !mx-5"></div>

        {/* Logout */}
        <Tooltip text={isOpen ? "" : "Ayarlar"} position="right">
          <div className="!pt-4 !px-4 border-slate-200 mt-auto truncate">
            <button
              className={`flex items-center gap-3 text-slate-500 ${
                isOpen ? "" : "justify-center"
              } !px-3 !py-2 w-full text-sm !rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-slate-100 hover:text-slate-600`}
            >
              <IconSettings2 className="w-5 h-5 min-w-5 min-h-5" />

              <span className={`${isOpen ? "block" : "hidden"}`}>Ayarlar</span>
            </button>
          </div>
        </Tooltip>

        <Tooltip text={isOpen ? "" : "Çıkış"} position="right">
          <div className="!p-4 mt-auto truncate">
            <button
              className={`flex items-center gap-3 ${
                isOpen ? "" : "justify-center"
              } !px-3 !py-2 w-full text-sm text-red-400 cursor-pointer hover:bg-red-50 hover:text-red-600 !rounded-lg transition-all duration-300 ease-in-out`}
            >
              <IconLogout className="w-5 h-5 min-w-5 min-h-5" />

              <span className={`${isOpen ? "block" : "hidden"}`}>
                Çıkış Yap
              </span>
            </button>
          </div>
        </Tooltip>
      </aside>
      {/* Main content */}
      <main className="flex-1 bg-gray-50 !p-6 overflow-auto">{children}</main>
    </div>
  );
};

export default Sidebar;
