import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api.js";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    await api.post("/users", { name, email, password }).then(() => {
        alert("Usuário Cadastrado com sucesso!");
        navigate("/")
      }).catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

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
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            placeholder="No mínimo 6 caracteres"
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Criar conta" onClick={handleSignUp} />
          <div className="signin-button">
            <Link to="/">Já tenho uma conta</Link>
          </div>
        </Form>
      </div>
    </Container>
  );
}
