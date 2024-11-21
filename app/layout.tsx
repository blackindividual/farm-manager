import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farm Manager",
  description: "Manage your farm inventory and resources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <header className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav />
          </div>
        </header>
        <Toaster />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
} 