import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import { Toaster } from "react-hot-toast";
import Home from "./home/home";

const jetbrainsMono = JetBrains_Mono(
  {
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: '--font-jetbrainsMono'
  }
)

export const metadata = {
  title: "Parikshit Sharma",
  description: "Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable}`}
      >
        <Home>
          {children}
        </Home>
      </body>
    </html>
  );
}
