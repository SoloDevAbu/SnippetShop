import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { JSX } from "react/jsx-runtime";
import { Appbar } from "@repo/ui/appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnippetShop",
  description: "A digital Code snippet marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Appbar />
          <div className="pt-20">
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}