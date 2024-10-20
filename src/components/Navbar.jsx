import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { BsXLg } from "react-icons/bs";
import { Button } from "./Button";

const links = [
  {
    name: "home",
    path: "#",
  },
  {
    name: "services",
    path: "#services",
  },
  {
    name: "resume",
    path: "#resume",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container  mx-auto flex justify-between items-center flex-wrap">
        {/* logo */}
        <h1 className="text-4xl font-semibold text-teal-400">Chris</h1>

        {/* desktop nav & hire me/contact button */}
        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex gap-8">
            {links.map((link, index) => {
              return (
                <a
                  href={link.path}
                  key={index}
                  className="capitalize hover:text-teal-400 transition-all"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <Button variant={"outline"} size={"md"} onClick={() => window.location.href = '#contact'}>
            Hire me
          </Button>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <i
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? (
              <CiMenuFries className="text-[32px] text-teal-400" />
            ) : (
              <BsXLg className="text-[32px] text-teal-400" />
            )}
          </i>
        </div>
        {isMenuOpen && (
          <nav className="flex flex-col basis-full justify-center items-center gap-6 py-5 font-semibold text-lg">
            {links.map((link, index) => {
              return (
                <a
                  href={link.path}
                  key={index}
                  className="capitalize hover:text-teal-400 transition-all"
                >
                  {link.name}
                </a>
              );
            })}
            <Button variant={"outline"} size={"md"} onClick={() => window.location.href = '#contact'}>
              Hire me
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
