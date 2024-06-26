import { Container, Logout, MobileReceipt } from "./styles";
import { PiReceiptBold } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { ButtonDish } from "../ButtonDish/ButtonDish";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Hamburguer } from "./Hamburguer";
import { USER_ROLE } from "../../utils/roles";
import { Button } from "../Button/Button";

export function Header() {
  const { signOut, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isAdmin = () => {
    return user && user.isAdmin === USER_ROLE.ADMIN;
  };

  const handleGoHome = () => {
    navigate("/"); 
  };

  const handleNewDishClick = () => {
    navigate("/dishes/");
  };

  return (
    <Container>
      <div className="content">
        <Hamburguer setMenuOpen={setMenuOpen} isOpen={menuOpen} />

        <div className="logo">
          <img src="../src/assets/Polygon.svg" alt="" />
          <button onClick={handleGoHome}>food explorer {isAdmin() && <span>admin</span>}</button>
        </div>

        <div className="search">
          <label>
            <input
              type="search"
              placeholder="Busque por pratos ou ingredientes"
            />
          </label>
        </div>

        <div className="final">
          {isAdmin() ? <button onClick={handleNewDishClick}>Novo Prato</button> : <ButtonDish />}
          <Logout>
            <GoSignOut onClick={signOut} />
          </Logout>
        </div>

        {isAdmin() ? (
          <span></span>
        ) : (
          <MobileReceipt>
            <span>0</span>
            <PiReceiptBold />
          </MobileReceipt>
        )}
      </div>
    </Container>
  );
}
