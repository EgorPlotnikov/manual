import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
import Footer from "./components/Footer";

const nunito_sans = Nunito_Sans({
  weight: ['400', '700', '800'],
  subsets: ["cyrillic", "latin"]
});

export const metadata = {
  title: "Мануал",
  description: "Мануал",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
