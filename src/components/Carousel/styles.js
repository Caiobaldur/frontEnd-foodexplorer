import styled from "styled-components";

export const Container = styled.div`
  padding: 0rem 12.3rem 4.8rem 12.3rem;
  .embla__viewport {
    overflow: hidden;

    h1 {
      font-family: ${({theme}) => theme.FONTS.Primary};
      font-size: 3.2rem;
      font-weight: 400;
      margin-bottom: 2.3rem;
    }
  }
  .embla__container {
    display: flex;
    width: 100%;
    gap: 2.7rem;
  }
  
  .embla__slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }

  @media (max-width: 500px) {
    padding: 0rem 0rem 0rem 2.4rem;
    .embla__viewport {
    h1 {
      font-family: ${({theme}) => theme.FONTS.Primary};
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 2.3rem;
    }
  }
  }
`;
