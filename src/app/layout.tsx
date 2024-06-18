import type { Metadata } from "next";
import "./globals.css";
import { dancingScript, lato, montserrat, roboto } from "@/components/Fonts";
import BlogLayout from "@/components/Layouts/BlogLayout";

export const metadata: Metadata = {
  title: "Publish your talk",
  description:
    "Post your all amazing thought in one place with freedom and safe!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${montserrat.variable} ${dancingScript.variable} ${lato.variable}`}
    >
      <body>
        <BlogLayout>{children}</BlogLayout>
      </body>
    </html>
  );
}
