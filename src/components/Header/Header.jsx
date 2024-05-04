import { Container, Logout, MobileReceipt } from "./styles";
import { PiReceiptBold } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";

import { ButtonDish } from "../ButtonDish/ButtonDish";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Hamburguer } from "./Hamburguer";

export function Header() {
  const { signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  // const { setSearch, search } = useSearch()
  // const { getCartCount } = useCart()



  return (
    <Container>
      <div className="content">
        <Hamburguer setMenuOpen={setMenuOpen} isOpen={menuOpen}/>
        <div className="logo">
          <img src="../src/assets/Polygon.svg" alt="" />
          <h1>food explorer</h1>
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
          <ButtonDish />
          <Logout>
            <GoSignOut onClick={signOut} />
          </Logout>
        </div>
        <MobileReceipt>
          <span>0</span>
          <PiReceiptBold />
        </MobileReceipt>
      </div>
    </Container>
  );
}
