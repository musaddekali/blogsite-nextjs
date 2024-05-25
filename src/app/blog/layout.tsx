import BlogLayout from "@/components/Layouts/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publish your talk",
  description:
    "Post your all amazing thought in one place with freedom and safe!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BlogLayout>{children}</BlogLayout>;
}
