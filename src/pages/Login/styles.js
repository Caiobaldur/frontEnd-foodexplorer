import styled from "styled-components";

export const Container = styled.div `

  color: white;
`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & input{
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    padding: 1.6rem 1.4rem;
    border-radius: .8rem;
    margin-bottom: 3.2rem;
  }

`;