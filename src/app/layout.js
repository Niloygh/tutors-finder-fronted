import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/component/Navbar";
import Footer from "@/component/Footer";
import { Toaster } from "react-hot-toast";
import { NextThemeProvider } from "@/nextThemeProvider/NextThemeProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tutor Finder",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased bg-background text-foreground `}
      suppressHydrationWarning
    >
      <body className="">


        <NextThemeProvider >
          <Navbar />
          <main className="container mx-auto">
            {children}
            <Toaster />
          </main>
          <Footer />
        </NextThemeProvider>


      </body>
    </html>
  );
}
