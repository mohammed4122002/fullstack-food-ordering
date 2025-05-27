"use client";

import { Pages, Routes } from "@/constants/enums";

import React, { useState } from "react";
import Link from "../Link";
import { Button, buttonVariants } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
import { useParams, usePathname } from "next/navigation";

const Navbar = ({navbar} : {navbar: {
    home: string,
    about: string,
    menu: string,
    contact: string,
    login: string,
    register: string,
    signOut: string,
    profile: string,
    admin: string,
}}) => {
 const params = useParams();
const locale = params.locale as string;
const pathname = usePathname();


  
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    { id: crypto.randomUUID(), titel: navbar.menu, href: Routes.MENU },
    { id: crypto.randomUUID(), titel: navbar.about, href: Routes.ABOUT },
    { id: crypto.randomUUID(), titel: navbar.contact, href: Routes.CONTACT },
    {
      id: crypto.randomUUID(),
      titel: navbar.login,
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
    <nav className="flex-1 justify-end flex ">
      <Button
        variant={"secondary"}
        size={"sm"}
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!h-6 !w-6" />
      </Button>

      <ul
        className={`${
          openMenu ? "left-0 z-50" : "-left-full"
        } fixed lg:static top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10 `}
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`/${locale}/${link.href}`}
              className={`${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({ size: "lg" })} !px-8 !rounded-full`
                  : "text-accent hover:text-primary transition-all duration-200"
              } font-semibold ${pathname === `/${locale}/${link.href}` ? "text-primary" : ""}`}
            >
              {link.titel}
            </Link>
          </li>
        ))}
        <Button
          variant={"secondary"}
          size={"sm"}
          className={`absolute top-4 right-4 lg:hidden`}
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!h-6 !w-6" />
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
