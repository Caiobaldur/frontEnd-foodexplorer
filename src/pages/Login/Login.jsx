import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container, Form } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";



export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email,password})
  }


  return (
    <Container>
        <div className="logo">
          <img src="../src/assets/logo_food.svg" alt="" />
        </div>
      <div className="form-wrapper">
      <Form>
        <h1>Faça login</h1>
          <label htmlFor="email">Email</label>
          <input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" id="email" onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="password">Senha</label>
        <input placeholder="No mínimo 6 caracteres" type="text" id="password" onChange={e => setPassword(e.target.value)}/>
    <Button title="Entrar" onClick={handleSignIn}/>
      <div className="signup-button">
        <Link to="/signup">Criar uma conta</Link>
      </div>
      </Form>
      </div>
    </Container>
  );

}