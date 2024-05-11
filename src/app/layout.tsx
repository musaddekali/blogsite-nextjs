import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout/Layout";
import { dancingScript, lato, montserrat, roboto } from "@/components/Fonts";

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
