"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <header className="shadow w-full text-white sticky">
      <nav className="sm:flex p-5 items-center justify-between bg-zinc-800">
        <div className="text-2xl">
          Chris
          <span
            className="text-3xl absolute right-8 cursor-pointer sm:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <AiOutlineClose /> : <RiMenuLine />}
          </span>
        </div>
        <ul
          className={`sm:flex sm:items-center sm:gap-6 absolute sm:static bg-zinc-800 sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-5 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-150px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="my-7 sm:my-0">
              <Link
                href={link.path}
                className="hover:text-cyan-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
