import { getCurrentLocale } from "@/lib/getCurrentLocale";
import "./[locale]/globals.css";
import type { Metadata } from "next";
import { Directions, Languages } from "@/constants/enums";

export const metadata: Metadata = {
  title: "Fullstack Food Ordering App",
  description: "Order your favorite food online!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const locale = await getCurrentLocale()
  return (
    <html lang={locale} dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}>
      <body>{children}</body>
    </html>
  );
}
