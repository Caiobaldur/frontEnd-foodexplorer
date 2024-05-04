import { Link } from "react-router-dom";
import { Footer } from "../../Footer/Footer";
import { Container, MenuMobile } from "./styles";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useAuth } from "../../../hooks/auth";

export function Hamburguer({ setMenuOpen, isOpen = false }) {
  const { signOut } = useAuth();

  function handleMenuOpen(isMenuOpen) {
    if(isMenuOpen) {
      setMenuOpen(true)
      activateBodyScroll(false)
    } else {
      setMenuOpen(false)
      activateBodyScroll(true)
    }
  }

  function activateBodyScroll(active){
    const body = document.body
    if(active) {
      body.style.overflow = "auto"
    } else {
      body.style.overflow = "hidden"
    }
  }

  return (
    <Container>
      <MenuMobile onClick={() => handleMenuOpen(true)}>
        <HiOutlineMenu />
      </MenuMobile>

      {isOpen && (
        <div className="menu">
          <div className="header__menu">
            <button onClick={() => handleMenuOpen(false)}>
              <HiOutlineX size={24}/>
            </button>
            <span>Menu</span>
          </div>
          <div className="content__menu">
          <label>
            <input
              type="search"
              placeholder="Busque por pratos ou ingredientes"
            />
          </label>
          <button onClick={() => signOut()}>
            Sair
          </button>
          <div className="line"></div>
          </div>
          <Footer />
        </div>
      )}
    </Container>
  );
}