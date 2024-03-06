import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lan Anh home design",
  description: "Lan Anh home design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-10">{children}</main>
      </body>
      <Footer />
    </html>
  );
}
