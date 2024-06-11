import "./globals.css";
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
export const metadata = {
  title: "Imdb-clone",
  description: "this is db movie clone",
};
const inter =Inter({subsets:['latin']})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
      </body>
    </html>
  );
}
