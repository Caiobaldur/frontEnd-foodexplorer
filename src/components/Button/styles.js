import styled from "styled-components";

export const Container = styled.button `
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.FONTS.Primary};
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  height: 4.8rem;
  border: 0;

  &:disabled{
    opacity: 0.5;
  }


`;

