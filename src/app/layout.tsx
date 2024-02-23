import { Poppins } from "@next/font/google";
import type { Metadata } from "next";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import "./globals.css";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "SML",
  description: "Portfolio de SML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" >
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
