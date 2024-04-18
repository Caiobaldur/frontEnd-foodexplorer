import styled from "styled-components";

export const Container = styled.div`
  color: white;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15.8rem;
    gap: 7.3rem;
  }
`;

export const Form = styled.form`

@media (max-width: 500px) {
    width: 31.6rem;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    & label {
      margin-bottom: 0.8rem;
    }

    & input {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      width: 100%;
      padding: 1.6rem 1.4rem;
      border-radius: 0.8rem;
      margin-bottom: 3.2rem;
    }
  }
`;
