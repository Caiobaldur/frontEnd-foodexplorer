import { AddButton, Container, FavButton, RemoveButton} from "./styles";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { Button } from "../Button/Button";

export function DishCard() {

  return (
    <Container>
      <FavButton>
        <MdFavoriteBorder />
      </FavButton>
      <div className="dishDescription">
        <img src="./src/assets/Mask_group.png" alt="" />
        <h3>Salada Ravanello &gt;</h3>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        <span className="dishPrice">R$ 49,97</span>
          <div className="wrap-order">
            <div className="order_varyButtons">
            <RemoveButton>
              <IoIosRemove/>
            </RemoveButton>
              <span className="quantity">01</span>
              <AddButton>
                <IoIosAdd/>
              </AddButton>
            </div>
            <div className="wrap_button">
              <Button title="incluir"/>
            </div>
          </div>
      </div>
      
    </Container>
  );
}