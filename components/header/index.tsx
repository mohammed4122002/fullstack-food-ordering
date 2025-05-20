import React from "react";
import Link from "../Link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="py-4 md:py-6 ">
      <div className="container flex items-center justify-between ">
        
      <Link href={Routes.ROOT}    className="text-primary font-semibold text-2xl"> 🍕 Pizza</Link>
      <Navbar />
        </div>
    </header>
  );
};

export default Header;
