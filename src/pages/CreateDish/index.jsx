import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
// import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Container, Button } from "./styles";

export function CreateDish() {
  const [dishImage, setDishImage] = useState(null);
  const [dishName, setDishName] = useState("");
  const [dishCategory, setDishCategory] = useState("");
  const [dishTags, setDishTags] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", dishName);
      formData.append("description", dishDescription);
      formData.append("image", dishImage);
      formData.append("price", dishPrice);
      formData.append("category", dishCategory);
      formData.append("ingredients", dishTags);

      const response = await fetch("/api/dishes", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao criar prato");
      }

      const data = await response.json();
      const newDishId = data.dish_id;
      navigate(`/dish/${newDishId}`);
    } catch (error) {
      console.error("Erro ao criar prato:", error);
    }
  };

  return (
    <Container>
      <Header />
      <section className="section_one">
        <BackButton />
        <h1>Adicionar prato</h1>
        <form onSubmit={handleSubmit}>
          <div className="form_upload">
            <span>Imagem do Prato</span>
            <label htmlFor="dishImage">
              <img src="/src/assets/upload.svg" alt="" />
              Selecionar imagem
            </label>
            <input
              type="file"
              id="dishImage"
              accept="image/*"
              onChange={(e) => setDishImage(e.target.files[0])}
            />
          </div>
          <div className="form_name">
            <label htmlFor="dishName">Nome</label>
            <input
              type="text"
              id="dishName"
              placeholder="Ex.: Salada Ceasar"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
            />
          </div>
          <div className="form_category">
            <label htmlFor="dishCategory">Categoria</label>
            <select
              id="dishCategory"
              value={dishCategory}
              onChange={(e) => setDishCategory(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="refeição">Refeição</option>
              <option value="sobremesas">Sobremesas</option>
              <option value="bebidas">Bebidas</option>
            </select>
          </div>
        </form>
      </section>
      <section className="section_two">
        <form action="">
          <div className="form_tags">
            <label htmlFor="dishTags">Ingredientes</label>
            <input
              type="text"
              id="dishTags"
              value={dishTags}
              onChange={(e) => setDishTags(e.target.value)}
            />
          </div>
          <div className="form_price">
            <label htmlFor="dishPrice">Preço</label>
            <input
              type="text"
              id="dishPrice"
              placeholder="R$ 00,00"
              value={dishPrice}
              onChange={(e) => setDishPrice(e.target.value)}
            />
          </div>
        </form>
      </section>
      <section className="section_three">
        <div className="form_description">
          <label htmlFor="dishDescription">Descrição:</label>
          <textarea
            id="dishDescription"
            value={dishDescription}
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDishDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="button-container">
          <Button type="submit">Salvar alterações</Button>
        </div>
      </section>
      <Footer />
    </Container>
  );
}
