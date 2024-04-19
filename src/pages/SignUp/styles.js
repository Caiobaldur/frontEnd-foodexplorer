import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas, cada uma com 1 fração de espaço */
  align-items: center;
  justify-content: center;
  height: 100vh; /* Defina a altura do contêiner para ocupar a altura total da tela */
  margin-top: auto; /* Centralize verticalmente ao definir a margem superior como automática */

  .logo {
    grid-column: 1; /* Coloque a logo na primeira coluna */
    justify-self: center; /* Centralize horizontalmente */
    margin-bottom: 7.3rem;
  }

  .signin-button {
    grid-column: 2; /* Coloque o botão de inscrição na segunda coluna */
    justify-self: center; /* Centralize horizontalmente */
    font-family: ${({ theme }) => theme.FONTS.Primary};
    font-size: 1.4rem;
    margin-top: 3.2rem;
    text-align: center;
  }

  .form-wrapper {
    padding: 6.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    width: 47.6rem;
    border-radius: 1.6rem;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto; /* Altura automática para dispositivos móveis */
    margin-top: 10rem;

    .logo {
      margin-bottom: 7.3rem;
    }

    .signin-button {
      font-family: ${({ theme }) => theme.FONTS.Primary};
      font-size: 1.4rem;
      margin-top: 3.2rem;
    }

    .form-wrapper{
      padding: 0;
      background-color: transparent;
      width: 31.6rem;
    }
  }
`;

export const Form = styled.form`
  grid-column: 2; /* Coloque o formulário na segunda coluna */
  justify-self: center; /* Centralize horizontalmente */

  font-family: ${({ theme }) => theme.FONTS.Secondary};
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  
  h1 {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  & label {
    margin-bottom: 0.8rem;
  }

  & input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    width: 100%;
    padding: 1.6rem 1.4rem;
    border-radius: 0.8rem;
    margin-bottom: 3.2rem;
  }

  @media (max-width: 500px) {
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;

    h1{
      display: none;
    }

    & label {
      align-items: left;
      margin-bottom: 0.8rem;
    }

    & input {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      width: 100%;
      padding: 1.6rem 1.4rem;
      border-radius: 0.8rem;
      margin-bottom: 3.2rem;
    }

    .signin-button{
      text-align: center;
      margin-bottom: 5rem;
    }
  }
`;
