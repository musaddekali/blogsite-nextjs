"use client";
import { useState } from "react";
import { SidebarType, sidebarMenu } from "./sidebarMenu";
import { BsChevronRight } from "react-icons/bs";
import { cn } from "@/utils";

export default function Sidebar() {
  const [activeDropdown, setActiveDropdown] = useState<SidebarType[] | null>(
    null
  );
  console.log("🚀 ~ Sidebar ~ activeDropdown:", activeDropdown);

  function toggleDropdown(menu: SidebarType) {
    if (activeDropdown !== null && activeDropdown?.includes(menu)) {
      const newMenu = activeDropdown.filter(
        (activeMenu) => activeMenu !== menu
      );
      setActiveDropdown(newMenu);
    } else {
      if (activeDropdown == null) {
        setActiveDropdown([menu]);
      } else {
        setActiveDropdown([...activeDropdown, menu]);
      }
    }
  }

  function renderMenu(menu: SidebarType, index: Number) {
    if (menu?.children?.length) {
      return (
        <li
          id={`dropdown-${menu.title}`}
          aria-label="Has dropdown"
          key={menu.title + index}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown(menu);
            }}
            aria-owns="OnClick"
            className="px-3 py-2 flex items-center justify-between gap-x-2 rounded cursor-pointer hover:bg-slate-100 text-slate-700"
          >
            <div className="flex items-center gap-x-2">
              <span className="inline-flex">{menu?.icon}</span>
              {menu.title}
            </div>
            <span
              className={cn("inline-flex transition", {
                "rotate-90": activeDropdown?.includes(menu),
              })}
            >
              <BsChevronRight className="w-3 h-3" />
            </span>
          </div>
          {activeDropdown?.includes(menu) && (
            <div aria-labelledby={`dropdown-${menu.title}`} className="pl-3">
              <ul>
                {menu?.children?.map(function renderSubmenu(
                  submenu: SidebarType,
                  sIndex
                ) {
                  return renderMenu(submenu, sIndex);
                })}
              </ul>
            </div>
          )}
        </li>
      );
    }
    return (
      <li aria-label="Single" key={menu.title + index}>
        <div className="px-3 py-2 flex items-center justify-between gap-x-2 rounded cursor-pointer hover:bg-slate-100 text-slate-700">
          <div className="flex items-center gap-x-2">
            <span className="inline-flex">{menu?.icon}</span>
            {menu.title}
          </div>
        </div>
      </li>
    );
  }

  return (
    <aside className="bg-white w-[260px] max-h-full overflow-y-auto overflow-x-hidden p-3 shrink-0 select-none">
      <h3 className="text-lg font-medium mb-2 pl-3">Dashboard</h3>
      <ul>
        {sidebarMenu.map(function renderMenuList(mainMenu, index) {
          return renderMenu(mainMenu, index);
        })}
      </ul>
    </aside>
  );
}
