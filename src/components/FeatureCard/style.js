import styled from "styled-components";

export const Container = styled.div`
  max-width: 112.0rem;
  margin: 0 auto;
  margin-top: 16.4rem;
  position: relative;
  height: fit-content;
  max-height: 26rem;

  display: flex;
  justify-content: space-between;
  box-shadow: inset 75px 3px 0px 0px ${({ theme }) => theme.COLORS.DARK_400};

  border-radius: .3rem;
  align-items: center;

  background: ${({ theme }) => theme.GRADIENTS.BACKGROUND_200};

  .image {
    width: 126rem;
    transform: translateY(-16%);
    overflow: hidden;
    height: 38rem;
    
  }

  img {
    transform: scaleX(-1);
  }

  .text {
    width: 100%;
    text-align: left;
  }

  h1 {
    font-size: 4rem;
    font-weight: 500;
  }

  p {
    
    font-size: 1.4rem;
    font-weight: 400;
  }


  @media (max-width: 500px) {
    margin-top: 5.4rem;
    max-height: 12rem;
    box-shadow: inset 19px 0px 0px 0px ${({ theme }) => theme.COLORS.DARK_400};
    max-width: 39rem;
    height: fit-content;
    position: relative;
    transform: translateX(-10px);

    .text {
    width: 100%;
    text-align: left;
    transform: translateY(10px);
  }
    
    .image {
      width: 29.1rem;
      transform: translateY(-3%);
      overflow: hidden;
      height: 12.9rem;
    }

    h1 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.52rem;
    margin-bottom: .5rem;
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.8rem;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
  }
  }

`;