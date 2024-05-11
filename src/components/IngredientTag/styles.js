import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.DARK_800};
  color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: .8rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
    > svg {
      color: white;
    }
  }

  > input {
    height: 4.8rem;
    width: 100%;

    padding: .6rem;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }

`;