import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is client dashboard",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
