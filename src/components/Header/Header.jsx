import { Container, Logout, MobileReceipt } from "./styles";
import { PiReceiptBold } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";

import { ButtonDish } from "../ButtonDish/ButtonDish";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Hamburguer } from "./Hamburguer";
import { USER_ROLE } from "../../utils/roles";
import { Button } from "../Button/Button";

export function Header() {
  const { signOut, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  // const { setSearch, search } = useSearch()
  // const { getCartCount } = useCart()
  return (
    <Container>
      <div className="content">
        <Hamburguer setMenuOpen={setMenuOpen} isOpen={menuOpen} />

        <div className="logo">
          <img src="../src/assets/Polygon.svg" alt="" />
          {[USER_ROLE.ADMIN].includes(user.isAdmin) ? (
            <h1>
              food explorer <span>admin</span>
            </h1>
          ) : (
            <h1>food explorer</h1>
          )}
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
          {[USER_ROLE.ADMIN].includes(user.isAdmin) ? (
            <button>Novo Prato</button>
          ) : (
            <ButtonDish />
          )}
          <Logout>
            <GoSignOut onClick={signOut} />
          </Logout>
        </div>
        {[USER_ROLE.ADMIN].includes(user.isAdmin) ? (
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
