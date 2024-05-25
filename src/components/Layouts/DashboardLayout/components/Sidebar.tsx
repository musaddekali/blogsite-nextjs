export default function Sidebar() {
  return (
    <aside className="bg-white w-[260px] max-h-full overflow-y-auto overflow-x-hidden p-4 shrink-0">
      <h3 className="text-lg font-medium mb-2 pl-3">Dashboard</h3>
      <ul>
        {Array.from({ length: 30 }).map(function renderSidebarItems(_, index) {
          return (
            <li key={index}>
              <div className="p-3 border-b">Sidebar item {index + 1}</div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
