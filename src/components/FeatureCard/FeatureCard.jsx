import { Container } from "./style";


export function FeatureCard(){

  return (
   <Container>
    <section className="content__card">
      <div className="image">
        <img src="./src/assets/imgCard.png" alt="" />
      </div>
      <div className="text">
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </section>
   </Container>
  );
}