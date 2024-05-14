import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../Footer/Footer";
import { Container, MenuMobile } from "./styles";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useAuth } from "../../../hooks/auth";

export function Hamburguer({ setMenuOpen, isOpen = false }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleMenuOpen(isMenuOpen) {
    if (isMenuOpen) {
      setMenuOpen(true);
      activateBodyScroll(false);
    } else {
      setMenuOpen(false);
      activateBodyScroll(true);
    }
  }

  function activateBodyScroll(active) {
    const body = document.body;
    if (active) {
      body.style.overflow = "auto";
    } else {
      body.style.overflow = "hidden";
    }
  }

  const handleNewDishClick = () => {
    navigate("/dishes/");
  };

  return (
    <Container>
      <MenuMobile onClick={() => handleMenuOpen(true)}>
        <HiOutlineMenu />
      </MenuMobile>

      {isOpen && (
        <div className="menu">
          <div className="header__menu">
            <button onClick={() => handleMenuOpen(false)}>
              <HiOutlineX size={24} />
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
            <div className="menu__options">
              {user.isAdmin ? (
                <button onClick={handleNewDishClick}>
                  Novo prato <div className="line"></div>
                </button>
              ) : (
                ""
              )}
              <button onClick={() => signOut()}>Sair</button>
            </div>
            <div className="line"></div>
          </div>
          <Footer />
        </div>
      )}
    </Container>
  );
}
