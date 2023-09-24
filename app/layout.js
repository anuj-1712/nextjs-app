import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { AppContext } from "@/contextApi/contextapi";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediaScope - Dose of your Daily News",
  description: "This app allows users to know about the latest information and stay updated ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContext>
          <Navbar />
          {children}
          <Footer />
        </AppContext>
      </body>
    </html>
  );
}
