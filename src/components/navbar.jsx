import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/utils";
import CartButtons from "./cartButton";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={"/"}>
            <img src={logo} alt="comfy-sloth" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to={"/checkout"}>checkout</Link>
            </li>
          )}
        </ul>

        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  .nav-center {
    width: 95vw;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    img {
      width: 175px;
      margin-left: -25px;
    }

    .nav-toggle {
      background: transparent;
      border: none;
      color: #ab7a5f;
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .nav-links {
      display: flex;
      gap: 0 2rem;

      li {
        text-transform: capitalize;
      }

      li > * {
        color: #243a52;
        letter-spacing: 1px;
        font-size: 1.025rem;
      }
    }

    .cart-btn-wrapper {
      display: flex;
      gap: 0 2rem;
      justify-content: center;
    }

    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      place-items: center;
    }
  }
`;

export default Navbar;
