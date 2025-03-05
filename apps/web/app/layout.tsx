import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { JSX } from "react/jsx-runtime";
import { ThemeProvider } from "@repo/ui/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
            enableSystem

          >
            <div className="">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}