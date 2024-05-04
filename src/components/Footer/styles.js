import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  padding: 2.4rem 12.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  position: static;
  bottom: 0;

  .footer {
    justify-content: space-between;
    width: 100%;
    display: flex;
    align-items: center;

    .logo {
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      display: flex;
      gap: 1rem;
      img {
        width: 3rem;
      }
      h1 {
        font-size: 2.4rem;
        line-height: 1;
      }
    }

    p {
      font-size: 1.4rem;
      line-height: 1;
    }
  }

  @media (max-width: 500px) {
    padding: 2.9rem 2rem;
    .footer {
      border: 1px red solid;
      .logo {
        border: 1px red solid;
        gap: 0.6rem;
        img {
          width: 2.2rem;
        }
        h1 {
          font-size: 1.5rem;
          white-space: nowrap;
        }
      }

      p {
        font-size: 1.1rem;
        /* border: 1px red solid; */
        white-space: nowrap;
      }
    }
  }
`;
