import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      aria-label="Dashboard Layout"
      className="flex flex-col h-screen oveflow-hidden"
    >
      <Header />
      <Header />
      <div aria-label="Main content" className="grow flex overflow-hidden">
        <Sidebar />
        <main className="bg-red-100 grow max-h-full overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
