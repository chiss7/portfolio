import Link from "next/link"

const Navbar = () => { 
  return (
    <header>
      <nav className="p-5 shadow sm:flex sm:items-center sm:justify-between">
        <div className="text-2xl">
          Chris
          <span></span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 z-[-1] sm:z-auto sm:static absolute bg-green-200 w-full sm:w-auto left-0 sm:py-0 py-4 sm:pl-0 opacity-0 sm:opacity-100">
          <Link href={'/'} className="hover:text-cyan-300 duration-500 my-6 sm:my-0 text-xl m-auto">Home</Link>
          <Link href={'/'} className="hover:text-cyan-300 duration-500 my-6 sm:my-0 text-xl m-auto">About Me</Link>
          <Link href={'/'} className="hover:text-cyan-300 duration-500 my-6 sm:my-0 text-xl m-auto">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar