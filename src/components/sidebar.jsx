import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { links } from "../utils/utils";
import CartButtons from "./cartButton";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { state, closeSidebar } = useProductsContext();
  const { isSidebarOpen } = state;
  const { myUser } = useUserContext();

  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
        <div className="sidebar-header">
          <img src={logo} alt="comfy-sloth" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id} onClick={closeSidebar}>
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
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: relative;

  .sidebar {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: var(--clr-white);
    transform: translateX(-100%);
    transition: var(--transition);
  }

  .show-sidebar {
    transform: translateX(0);
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    margin-bottom: 1.5rem;

    img {
      width: 175px;
    }

    button {
      background: transparent;
      border: none;
      color: var(--clr-red-dark);
      font-size: 2rem;
    }
  }

  .links {
    margin-bottom: 2rem;

    li {
      padding: 1rem 2rem;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: 1px;
    }

    li > * {
      color: #102a42;
    }
  }

  .cart-btn-wrapper {
    display: flex;
    gap: 0 2rem;
    justify-content: center;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default Sidebar;
