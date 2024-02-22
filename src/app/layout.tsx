import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

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
    <html lang="fr">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
