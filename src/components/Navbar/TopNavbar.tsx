import Logo from "../../assets/fb-logo.png";
import "./top-navbar.scss";
import { BiSearch } from "react-icons/bi";
import { RiMessengerFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={Logo} alt="logo facebook" className="nav__logo" />
      <div className="nav__top-icons-area flex">
        <button className="nav__icon-btn flex">
          <BiSearch className="nav__icon" />
        </button>
        <button className="nav__icon-btn flex">
          <RiMessengerFill className="nav__icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
