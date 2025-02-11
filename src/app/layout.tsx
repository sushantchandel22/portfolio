import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const inter = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jatin Sharma - Software Engineer.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
      <body className={inter.className}>
        {children}
        <Navbar/>
        </body>
          </ThemeProvider>
    </html>
  );
}
