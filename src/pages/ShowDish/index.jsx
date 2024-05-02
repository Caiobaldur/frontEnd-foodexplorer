import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Container, Section } from "./style";
import { BackButton } from "../../components/BackButton";
import dish1 from "../../assets/Mask_group.png";
import { Tag } from "../../components/Tag";
import { AddButton, RemoveButton } from "../../components/DishCard/styles";
import { IoIosAdd, IoIosRemove } from "react-icons/io";


export function ShowDish() {
  return (
    <Container>
      <Header />
      <Section>
        <div className="left__content">
        <BackButton />
        <img src={dish1} alt="" />
        </div>
        <div className="dish__description">
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <div className="dish__ingredients">
            <Tag title="cebola" />
            <Tag title="alface" />
            <Tag title="tomate" />
            <Tag title="azeite" />
            <Tag title="queijo" />
            <Tag title="pepino" />
            <Tag title="cebola roxa" />
          </div>
          <div className="wrap-order">
            <div className="order_varyButtons">
              <RemoveButton>
                <IoIosRemove />
              </RemoveButton>
              <span className="quantity">01</span>
              <AddButton>
                <IoIosAdd />
              </AddButton>
            </div>
            <div className="wrap_button">
              <Button title="incluir · R$ 12,95" />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </Container>
  );
}
