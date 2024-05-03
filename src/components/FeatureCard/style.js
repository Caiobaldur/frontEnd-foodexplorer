import styled from "styled-components";

export const Container = styled.div`
  padding: 0 12.4rem;
  .content__card {
    margin-top: 16.4rem;
    margin-bottom: 6.2rem;
    position: relative;
    height: fit-content;
    max-height: 26rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    border-radius: 0.3rem;
    background: ${({ theme }) => theme.GRADIENTS.BACKGROUND_200};
  }

  .image {
    transform: translateY(-18%) translateX(-10%);
    overflow: hidden;
    height: 40.5rem;

    img {
      width: 126rem;
      height: 80rem;
      transform: scaleX(-1);
    }
  }

  .text {
    padding: 18rem 1rem 20rem 0rem;
    width: 100%;
    text-align: left;

    h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  @media (max-width: 500px) {
    padding: 0rem 1.6rem 0rem 1.6rem;

    .content__card {
      display: flex;
      box-shadow: inset 8px 0px 0px 0px ${({ theme }) => theme.COLORS.DARK_400};
      margin-top: 5.4rem;
      max-height: 13rem;
      height: fit-content;
      position: relative;
    }

    .image {
      transform: translateY(-10.5%) translateX(-8.5%);
      overflow: hidden;
      height: 16.5rem;

      img {
        width: 38rem;
        height: 28rem;
      }
    }

    .text {
      padding: 1rem 0rem 0rem 0rem;
      text-align: left;
      transform: translateY(-1%) translateX(-13%);
      h1 {
        font-size: 1.8rem;
        white-space: nowrap;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.8rem;
      }
    }
  }
`;
