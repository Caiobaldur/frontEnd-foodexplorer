import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="logo">
          {/* <img src="../src/assets/GreyPolygon.svg" alt="" /> */}
          <h1>food explorer</h1>
        </div>
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}
