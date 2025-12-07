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
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <AppHeader />
        <main className="mx-auto max-w-7xl px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
