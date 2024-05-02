import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  padding: .8rem .8rem;
  border-radius: .5rem;
  margin-right: 1.2rem;
  font-family: ${({theme}) => theme.FONTS.Primary};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  @media (max-width: 500px) {
    transform: translateX(10px);
    margin-right: 2.4rem;
    margin-bottom: 2.8rem;
  }
`;