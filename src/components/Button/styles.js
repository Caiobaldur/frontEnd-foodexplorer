import styled from "styled-components";

export const Container = styled.button `
  width: 100%;
  font-family: ${({ theme }) => theme.FONTS.Primary};
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  border: 0;

  &:disabled{
    opacity: 0.5;
  }

  @media (max-width: 500px) {
    /* height: 3.2rem;
    width: 16.2rem; */
  }
`;

