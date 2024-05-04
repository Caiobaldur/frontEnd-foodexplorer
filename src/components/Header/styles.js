import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  width: 100%;

  .content {
    display: flex;
    padding: 2.4rem 12.3rem;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1.1rem;
  }

  .search {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  .search label input {
    background: url(../src/assets/VectorSearch.svg) no-repeat;
    background-position: 13.5rem center;
    padding: 1.6rem 0rem;
    width: 58rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
  }

  .search h1 {
    flex-wrap: nowrap;
    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.FONTS.Primary};
  }

  .final {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  @media (max-width: 500px) {
    .content {
      padding: 5.6rem 2.8rem 2.4rem;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      transform: translateY(-15%);
    }

    .search {
      display: none;
    }

    .final {
      display: none;
    }

  }
`;

export const Logout = styled.button`
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.2rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const MobileReceipt = styled.button`
  
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.6rem;
    position: relative;
  }
  
  >span {
    position: absolute;
    color: white;
    padding-top: .2rem;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    border-radius: 50%; 
    height: 2rem;
    width: 2rem;
    z-index: 1;
    margin: -0.6rem 1.3rem 2rem;
  }
  
  @media (max-width: 2560px) {
    display: none;
  }
  
  @media (max-width: 500px) {
    display: block;
  }
`;