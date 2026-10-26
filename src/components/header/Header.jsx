import Container from "../ui/Container";
import logo from "../../../public/assets/images/logo/logo.png";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="py-60 bg-[#fff8f2FF] ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex cursor-pointer">
            <img className="w-40 h-40" src={logo} alt="logo" />
            <span className="ml-10 text-[30px] font-bold">SaaSto</span>
          </div>

          <nav className="mobile:hidden tablet:hidden desktop:block">
            <ul className="flex gap-48">
              <NavLinks />
            </ul>
          </nav>

          <div className="mobile:hidden tablet:hidden desktop:block gap-[36px] ">
            <button className="text-[#ff553eFF] cursor-pointer transition-transform duration-200 hover:scale-115 hover:text-[#e62538] mr-10">
              Login
            </button>
            <button className="bg-[#ff553eFF] px-36 py-16 rounded-3xl text-white cursor-pointer hover:bg-[#e62538] transition-all duration-200">
              Sign up
            </button>
          </div>
          <Burger isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </Container>
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
}

export default Header;

function Link({ children, onClick }) {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer hover:-translate-y-2 relative p-10 transition-all duration-300 hover:text-[#ff553eFF]"
    >
      {children}
    </li>
  );
}

function NavLinks({ children, closeMenu }) {
  return (
    <>
      <Link onClick={closeMenu}>Demos</Link>
      <Link onClick={closeMenu}>Features</Link>
      <Link onClick={closeMenu}>Pricing</Link>
      <Link onClick={closeMenu}>Contact</Link>
    </>
  );
}

function Burger({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="mobile:flex tablet:flex desktop:hidden flex-col gap-6  cursor-pointer h-40 w-40 justify-center items-center"
    >
      <span
        className={`block w-30 h-3 bg-black duration-200    ${isOpen ? "translate-y-8 rotate-45" : ""}`}
      />
      <span
        className={`block w-30 h-3 bg-black duration-200    ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`block w-30 h-3 bg-black duration-200 [will-change:transform] ${isOpen ? "-translate-y-8 -rotate-45" : ""}`}
      />
    </button>
  );
}

function MobileMenu({ isOpen, closeMenu }) {
  return (
    <>
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 desktop:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[280px] bg-white p-6 shadow-2xl transition-transform duration-300 desktop:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-20 flex flex-col gap-2">
          <NavLinks closeMenu={closeMenu} />
        </ul>
      </aside>
    </>
  );
}
