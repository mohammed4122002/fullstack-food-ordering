import React from "react";
import Link from "../Link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";
import CartButton from "./CartButton";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import LanguaggSwitcher from "./LanguaggSwitcher";

const Header = async() => {
  const locale = await getCurrentLocale()
         const {logo , navbar}= await getTrans(locale)
      
  return (
    <header className="py-4 md:py-6 ">
      <div className="container flex items-center justify-between ">
        
      <Link href={Routes.ROOT}    className="text-primary font-semibold text-2xl"> 🍕 {logo}</Link>
      <Navbar navbar={navbar} />
      <LanguaggSwitcher />
      <CartButton/>
        </div>
    </header>
  );
};

export default Header;
