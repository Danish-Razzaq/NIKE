"use client";

import Image from "next/image";
import { headerLogo } from "../../../public/images";
import Link from "next/link";
import { navLinks } from "@/utils/mokap";
import { hamburger } from "../../../public/icons";
import { link } from "fs";

export default function Navbar() {
  return (
    <>
      <header className="padding-x py-8 flex absolute    z-10 w-full   justify-between items-start ">
        <nav className="flex w-full  items-start justify-between ">
        <Link href={"/"}>
            <Image src={headerLogo} alt="Logo" width={139} height={30} />
          </Link>
          
  
          <ul className="flex   justify-between gap-20 font-semibold  items-center  max-lg:hidden -ml-10">
      
            {navLinks.map((e) => {
              return (
                <li key={e.label} >
                  <Link href={e.href}>{e.label}</Link>{" "}
                </li>
              );
            })}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-34  ">
            <Link href="/">Sign in</Link>
            <span>/</span>
            <Link href="/">Explore now</Link>
          </div>
          <div className="hidden  max-lg:block">
            <Image
              src={hamburger}
              alt="hamburger icon"
              width={25}
              height={25}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
