import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "CHIENBANG.CHEN | Portfolio",
  description: "Personal Space of Chienbang - Satellite Comm & Life Stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-gray-50 dark:bg-[#020617] transition-colors duration-300">
        <Navigation />
        {/* Removed max-w-4xl to allow full-width pages like the new CV and Home */}
        <div className="w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
