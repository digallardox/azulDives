import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "@/app/components/appBar/AppBar";
import { SessionProvider } from "./context/SessionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azul Dives",
  description: "An escape from reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div id="margins" className="px-[20px] pt-[100px]">{children}</div>
          <AppBar />
        </SessionProvider>
      </body>
    </html>
  );
}
