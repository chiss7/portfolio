"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow w-full text-white">
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
        <ul className={`sm:flex sm:items-center sm:gap-6 absolute sm:static bg-zinc-800 left-0 w-full sm:w-auto sm:pl-0 pl-5 transition-all duration-500 ease-in ${!open && 'hidden'}`}>
          <li className="my-7 sm:my-0">
            <Link href={"/"} className="hover:text-cyan-400 duration-500">
              Home
            </Link>
          </li>
          <li className="my-7 sm:my-0">
            <Link href={"/"} className="hover:text-cyan-400 duration-500">
              About Me
            </Link>
          </li>
          <li className="my-7 sm:my-0">
            <Link href={"/"} className="hover:text-cyan-400 duration-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
