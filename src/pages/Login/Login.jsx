import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container, Form } from "./styles";

export function Login() {

  return (
    <Container>
        <div className="logo">
          <img src="../src/assets/logo_food.svg" alt="" />
        </div>
      <Form>
          <label htmlFor="email">Email</label>
          <input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" id="email"/>
        <label htmlFor="password">Senha</label>
        <input placeholder="No mínimo 6 caracteres" type="text" id="password"/>
    <Button title="Entrar"/>
      </Form>
      <div className="signup-button">
        <Link to="/signup">Criar uma conta</Link>
      </div>
    </Container>
  );

}