import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import ReactQueryProvider from "@/react-query";
import { ThemeProvider } from "@/components/global/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/global/header";

const openSans = Open_Sans({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "HM Motors",
  description: "HM Motors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.className} bg-background h-screen flex flex-col antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Header />
            <main className="flex-1 px-7 pb-2 ">
              {children}
              <Toaster position="top-right" />
            </main>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
