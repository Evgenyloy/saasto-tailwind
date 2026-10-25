import Container from "../ui/Container";
import logo from "../../../public/assets/images/logo/logo.png";

function Header() {
  return (
    <header className="py-60 bg-[#fff8f2FF]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex cursor-pointer">
            <img className="w-40 h-40" src={logo} alt="logo" />
            <span className="ml-10 text-[30px] font-bold">SaaSto</span>
          </div>

          <nav className="">
            <ul className="flex gap-48">
              <Link>Demos</Link>
              <Link>Features</Link>
              <Link>Pricing</Link>
              <Link>Contact</Link>
            </ul>
          </nav>

          <div className="flex gap-36">
            <button className="text-[#ff553eFF] cursor-pointer transition-transform duration-200 hover:scale-115 hover:text-[#e62538]">
              Login
            </button>
            <button className="bg-[#ff553eFF] px-36 py-16 rounded-3xl text-white cursor-pointer hover:bg-[#e62538] transition-all duration-200">
              Sign up
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;

function Link({ children }) {
  return (
    <li className="cursor-pointer hover:-translate-y-2 relative p-10 transition-all duration-300 hover:text-[#ff553eFF]">
      {children}
    </li>
  );
}
