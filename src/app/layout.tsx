import type { Metadata } from "next";
import "./globals.css";
import AppHeader from "@/components/layout/AppHeader";

export const metadata: Metadata = {
  title: "Pokedex Lite",
  description: "A modern Pokédex built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#f6f8fc] text-gray-900 antialiased
             dark:bg-gray-900 dark:text-gray-100"
      >

        <AppHeader />
        <main className="mx-auto max-w-7xl px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
