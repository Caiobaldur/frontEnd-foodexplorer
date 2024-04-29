import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  padding: 2.4rem 12.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  position: fixed;
  bottom: 0;

  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        width: 3rem;
      }
      h1 {
        font-size: 2.4rem;
      }
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 500px) {
    padding: 2.9rem 2.7rem;
    .footer {
      gap: 0.8rem;
      align-items: center;
      .logo {
        gap: 0.6rem;
        img {
          width: 2.2rem;
        }
        h1 {
          font-size: 1.5rem;
        }
      }

      p {
        font-size: 1.1rem;
        transform: translateY(1px);
      }
    }
  }
`;
