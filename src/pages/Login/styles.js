import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  align-items: center;
  justify-content: center;
  height: 100vh; 
  margin-top: auto; 

  .logo {
    grid-column: 1; 
    justify-self: center;
    margin-bottom: 7.3rem;
  }

  .signup-button {
    grid-column: 2; 
    justify-self: center;
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
    height: auto; 
    margin-top: 10rem;

    .logo {
      margin-bottom: 7.3rem;
    }

    .signup-button {
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
  grid-column: 2; 
  justify-self: center; 
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
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 100%;
    padding: 1.6rem 1.4rem;
    border-radius: 0.8rem;
    margin-bottom: 3.2rem;
  }

  & button {
    padding: 1.2rem 12.3rem;
  }

  @media (max-width: 500px) {
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;

    button {
      padding: 1.2rem;
    }

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

    .signup-button{
      text-align: center;
    }
  }
`;
