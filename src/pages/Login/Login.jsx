import { Button } from "../../components/Button/Button";
import { Container, Form } from "./styles";

export function Login() {

  return (
    <Container>
      <div>
        <div>
          <img src="../src/assets/logo_food.svg" alt="" />
        </div>
      <Form>
        <label htmlFor="email">E-mail</label>
        <input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" id="email"/>
        <label htmlFor="password">Senha</label>
        <input placeholder="No mínimo 6 caracteres" type="text" id="password"/>
      </Form>

    <Button/>
      </div>
    </Container>
  );

}