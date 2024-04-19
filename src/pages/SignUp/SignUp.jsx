import { Button } from "../../components/Button/Button";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
    <div className="logo">
      <img src="../src/assets/logo_food.svg" alt="" />
    </div>
  <div className="form-wrapper">
  <Form>
    <h1>Crie sua conta</h1>
    <label htmlFor="name">Seu nome</label>
        <input
          placeholder="Exemplo: Maria da Silva"
          type="text"
          id="name"
        />
      <label htmlFor="email">Email</label>
      <input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" id="email"/>
    <label htmlFor="password">Senha</label>
    <input placeholder="No mínimo 6 caracteres" type="text" id="password"/>
<Button title="Entrar"/>
  <div className="signin-button">
    <Link to="/">Já tenho uma conta</Link>
  </div>
  </Form>
  </div>
</Container>
  );
}