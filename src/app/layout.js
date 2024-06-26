import "./globals.css";
import {Inter} from 'next/font/google'
// import Header from "@/components/Header";
import Header from "../components/Header.jsx";
// import Navbar from "@/components/Navbar";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
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
            <SearchBox />
            {children}
        </Providers>
      </body>
    </html>
  );
}
