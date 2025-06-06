import Header from "@/components/header";
import Footer from "@/components/footer";
import ReduxProvider from "@/providers/ReduxProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Directions, Languages } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

 }>) {

 const locale = await getCurrentLocale()
  return (
    <html lang={locale} dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}>
      <body className={roboto.className}>
    <ReduxProvider>
      <Header />
      {children}
      <Footer />
    </ReduxProvider>
    </body>
    </html>
  );
}
