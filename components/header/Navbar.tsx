"use client";


import { Pages, Routes } from "@/constants/enums";

import React, { useState } from "react";
import Link from "../Link";
import { Button, buttonVariants } from "../ui/button";
import { Menu, XIcon } from "lucide-react";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
  const links = [
    { id: crypto.randomUUID(), titel: "Menu", href: Routes.MENU },
    { id: crypto.randomUUID(), titel: "About", href: Routes.ABOUT },
    { id: crypto.randomUUID(), titel: "Contact", href: Routes.CONTACT },
    {
      id: crypto.randomUUID(),
      titel: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
   
            <nav className="flex-1 justify-end flex ">

                <Button variant={"secondary"} size={'sm'} className="lg:hidden"  onClick={()=> setOpenMenu(true)}>
              <Menu className="!h-6 !w-6" />
                </Button>



      <ul className={`${openMenu? 'left-0 z-50' : '-left-full'} fixed lg:static top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10 `}>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`/${link.href}`}
              className={`${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({size: "lg"})} !px-8 !rounded-full`
                  : "text-accent hover:text-primary transition-all duration-200"
              } font-semibol`}
            >
              {link.titel}
            </Link>
          </li>
          

        ))}
        <Button variant={"secondary"} size={'sm'} className={`absolute top-4 right-4 lg:hidden`} onClick={()=> setOpenMenu(false)}>
                <XIcon className="!h-6 !w-6" />
                </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
