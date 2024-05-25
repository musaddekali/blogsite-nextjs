"use client";
import { cn } from "@/utils";
import { sidebarMenu } from "./sidebarMenu";

export default function Sidebar() {
  return (
    <aside className="bg-white w-[260px] max-h-full overflow-y-auto overflow-x-hidden p-3 shrink-0">
      <h3 className="text-lg font-medium mb-2 pl-3">Dashboard</h3>
      <ul>
        {sidebarMenu.map(function renderSidebarItems(mainMenu, index) {
          return (
            <li key={index}>
              <div
                className={cn(
                  "p-3 border-b flex items-center gap-x-2 cursor-pointer hover:bg-slate-100 text-slate-700",
                  { "border-b-0": sidebarMenu.length - 1 === index }
                )}
              >
                <span
                  aria-label={`Icon ${mainMenu.title}`}
                  className="inline-flex"
                  role="image"
                >
                  {mainMenu.icon}
                </span>{" "}
                <p className="text-base">{mainMenu.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
