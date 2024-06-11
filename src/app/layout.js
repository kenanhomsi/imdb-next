import "./globals.css";
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";

export const metadata = {
  title: "Imdb-clone",
  description: "this is db movie clone",
};
const inter =Inter({subsets:['latin']})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <Header />
            <Navbar />
            {children}
        </Providers>
      </body>
    </html>
  );
}
