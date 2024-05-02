import styled from "styled-components";

export const Container = styled.div``;

export const Section = styled.section`
  padding: 2.4rem 12.3rem 15rem;
  display: flex;

  .left__content {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 4.2rem;

    > img {
      width: 39rem;
      height: 39rem;
    }
  }
  .dish__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    gap: 2.4rem;
    h1 {
      font-size: 4rem;
      font-weight: 500;
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
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    width: 2.4rem;
    height: 3rem;
    font-size: 2rem;
  }

  .wrap_button {
    & button {
      font-size: 1.4rem;
      padding: 0 2.4rem;
    }
  }

  @media (max-width: 500px) {
    padding: 3.6rem 5.6rem 3.3rem 5.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    .left__content {
      gap: 2.6rem;

      > img {
        width: 26.4rem;
        height: 26.4rem;
      }
    }

    .dish__description {
      justify-content: center;
      align-items: center;

      gap: 2.4rem;
      h1 {
        font-size: 2.7rem;
        font-weight: 500;
      }

      p {
        width: 31.6rem;
        font-size: 1.6rem;
        text-align: center;
      }
    }

    .dish__ingredients {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 31.6rem;
    }
  }

  .wrap-order {
    padding-top: 2.8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .order_varyButtons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .quantity {
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    width: 2.6rem;
    height: 3.6rem;
    font-size: 2.2rem;
  }

  .wrap_button {
    & button {
      
      padding: 0 2.4rem;
    }
  }
`;
