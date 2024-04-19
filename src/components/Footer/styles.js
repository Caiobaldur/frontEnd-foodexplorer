import styled from "styled-components";

export const Container = styled.button `
  font-family: ${({ theme }) => theme.FONTS.Primary};
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  padding: 1.7rem 13.7rem;
`;

