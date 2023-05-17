import { Header } from "./components/header";
import { Sidebare } from "./components/sidebare";
import "./globals.css";
import { Roboto } from "next/font/google";


const inter = Roboto({ 
    weight: ['100', '300', '400', '500',  '700','900'],
    style: ['normal'],
    subsets: ['latin'],
});

export const metadata = {
  title: "Sport See",
  description: "Application de suivit sportive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <div className="flex">
        <Sidebare />
        {children}
        </div>
      </body>
    </html>
  );
}
