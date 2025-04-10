import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-screen-xl w-full px-6 py-4 relative z-30">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden lg:flex gap-12 items-center">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-base text-gray-600 flex items-center cursor-pointer pb-1.5 transition-all hover:font-semibold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <button className="bg-green-500 text-white py-2 sm:block px-4 active:bg-green-700 rounded-md font-bold cursor-pointer hidden">
          Log In
        </button>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};


export default Navbar;
