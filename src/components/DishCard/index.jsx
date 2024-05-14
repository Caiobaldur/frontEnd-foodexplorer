import { AddButton, Container, FavButton, RemoveButton } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";
import { PiPencilSimple } from "react-icons/pi";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { Button } from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function DishCard() {
  const navigate = useNavigate();
  const { editDish, user } = useAuth();
  // const [dishName, setDishName] = useState(dish.name)
  // const [dishDescription, setDishDescription] = useState(dish.description)
  // const [dishImage, setDishImage] = useState(dish.image)
  // const [dishPrice, setDishPrice] = useState(dish.price)
  // const [dishCategory, setDishCategory] = useState(dish.category)
  const isAdmin = () => {
    return user && user.isAdmin === USER_ROLE.ADMIN;
  };

  const handleGoDish = () => {
    navigate("/dishes/:id");
  };

  const handleEditDish = () => {
    navigate("/dishes/:id");
  };

  return (
    <Container>
      <FavButton>
        {isAdmin() ? (
          <PiPencilSimple onClick={handleEditDish} />
        ) : (
          <MdFavoriteBorder />
        )}
      </FavButton>
      <div className="dishDescription">
        <img src="./src/assets/Mask_group.png" alt="" />
        <button className="dishName" onClick={handleGoDish}>
          Salada Ravanello &gt;
        </button>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>
        <span className="dishPrice">R$ 49,97</span>
        <div className="wrap-order">
          {isAdmin() ? (
            ""
          ) : (
            <div className="order_varyButtons">
              <RemoveButton>
                <IoIosRemove />
              </RemoveButton>
              <span className="quantity">01</span>
              <AddButton>
                <IoIosAdd />
              </AddButton>
            </div>
          )}
          {isAdmin() ? (
            ""
          ) : (
            <div className="wrap_button">
              <Button title="incluir" />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
