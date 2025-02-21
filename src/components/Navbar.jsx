import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 sm:px-12 flex justify-center items-center  top-2 left-0 z-50">
      <nav className="flex w-full max-w-screen-lg mx-auto items-center justify-between">
        {/* Apple Logo */}
        <img
          src={appleImg}
          alt="Apple"
          width={14}
          height={18}
          className="cursor-pointer"
        />

        {/* Navigation Links */}
        <div className="flex flex-1 justify-center gap-7 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition duration-300"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Search & Bag Icons */}
        <div className="flex items-center gap-7 pr-5">
          <img
            src={searchImg}
            alt="search"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <img
            src={bagImg}
            alt="bag"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
