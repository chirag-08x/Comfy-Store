import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { links } from "../data.js";

const Navbar = () => {
  const { openSidebar, closeSidebar, refContainer, totalItems, sidebarOpen } =
    useGlobalContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Header
          classname="nav-header"
          icon={<FaBars />}
          onclick={openSidebar}
        />
        <Links classname="nav-links" />
        <LoginCart classname="nav-login-cart" totalItems={totalItems} />
      </div>
      <aside className="sidebar" ref={refContainer}>
        <div className="sidebar-center">
          <Header
            classname="sidebar-header"
            icon={<FaTimes />}
            onclick={closeSidebar}
          />
          <Links classname="sidebar-links" />
          <LoginCart classname="sidebar-login-cart" totalItems={totalItems} />
        </div>
      </aside>
      ;
    </nav>
  );
};

export default Navbar;

const Header = ({ classname, icon, onclick }) => {
  return (
    <div className={`${classname} header`}>
      <Link to={"/"}>
        <img src={logo} alt="comfy store" className="logo" />
      </Link>
      <button className="toggle-btn" onClick={onclick}>
        {icon}
      </button>
    </div>
  );
};

const Links = ({ classname }) => {
  return (
    <ul className={classname}>
      {links.map((link) => {
        const { id, path, text } = link;
        return (
          <li key={id} className="nav-link">
            <Link to={path}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const LoginCart = ({ classname, totalItems }) => {
  return (
    <div className={classname}>
      <Link className="cart" to={"/cart"}>
        <p>cart</p>
        <FaShoppingCart />
        <h5 className="items-number">{totalItems}</h5>
      </Link>

      <Link className="login" to={"/login"}>
        <p>login</p>
        <FaUserPlus />
      </Link>
    </div>
  );
};
