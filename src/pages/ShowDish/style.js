import styled from "styled-components";

export const Container = styled.div`
  .back_button {
    padding: 3.2rem 0rem 0rem 12.3rem;
  }
`;

export const Section = styled.section`
  padding: 2.4rem 12.3rem 15rem;
  display: flex;
  min-height: calc(100vh - 25rem);
  align-items: center;
  justify-content: center;
  gap: 4.7rem;
  .left__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1/2;

    > img {
      width: clamp(26.4rem, 50vw, 39rem);
      height: clamp(26.4rem, 50vw, 39rem);
    }
  }
  .dish__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 3/4;
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
    display: flex;
    align-items: center;
    padding-top: 2.4rem;
    gap: 3.3rem;
    .order_varyButtons {
      display: flex;
      align-items: center;
      gap: 1rem;

      & svg {
        font-size: 2.7rem;
      }
      .quantity {
        font-family: ${({ theme }) => theme.FONTS.Secondary};
        font-size: 2.2rem;
      }
    }
  }
  .wrap_button {
    button {
      font-size: 1.4rem;
      padding: 1.2rem 2.4rem;
    }
  }

  @media (max-width: 500px) {
    padding: 3.6rem 5.6rem 3.3rem 5.6rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    .left__content {
      gap: 2.6rem;

      > img {
        width: clamp(26.4rem, 50vw, 39rem);
        height: clamp(26.4rem, 50vw, 39rem);
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
    .order_varyButtons {
      transform: translateY(12%);

      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .quantity {
      font-family: ${({ theme }) => theme.FONTS.Secondary};

      font-size: 2.2rem;
    }
  }
`;
