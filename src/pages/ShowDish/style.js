import styled from "styled-components";

export const Container = styled.div`



`;

export const Section = styled.section`

    padding: 2.4rem 12.3rem 15rem;
    display: flex;

  .left__content{
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 4.2rem;

    > img {
      width: 39rem;
      height: 39rem;
    }
  }
  .dish__description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    gap: 2.4rem;
    h1 {
      font-size: 4rem;
    }
    
    p {
      width: 68.7rem;
      font-size: 2.4rem;
    }
  }

  .wrap-order {
    padding-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 3.3rem;
  }

  .order_varyButtons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .quantity {
    font-family: ${({theme}) => theme.FONTS.Secondary};
    width: 2.4rem;
    height: 3rem;
    font-size: 2rem;
  }

  .wrap_button {
    & button{
      padding: 0 2.4rem;
    }
  }

`;