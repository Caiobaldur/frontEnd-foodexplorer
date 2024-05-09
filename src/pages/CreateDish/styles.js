import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  .section_one {
    padding: 4rem 12.3rem 3.2rem 12.3rem;
    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      padding: 2.4rem 0rem 3.2rem 0rem;
      font-size: 3.2rem;
      font-weight: 400;
    }
    > form {
      display: flex;
      gap: 3.2rem;
    }
  }
  .form_upload {
    display: flex;
    flex-direction: column;
    width: 100%;
    > span {
      font-family: ${({ theme }) => theme.FONTS.Secondary};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4.8rem;
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      font-family: ${({ theme }) => theme.FONTS.Primary};
      font-size: 1.4rem;
      border-radius: 0.8rem;
      position: relative;
      img {
        margin-right: 1rem;
      }
    }
    input[type="file"] {
      display: none;
    }
  }

  .form_name,
  .form_category,
  .form_tags,
  .form_price {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    > label {
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }
    > input,
    > select {
      height: 4.8rem;
      width: 100%;
      padding-left: 1.4rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }



  .section_two {
    padding: 0rem 12.3rem 3.2rem 12.3rem;
    > form {
      display: flex;
      gap: 3.2rem;
    }
  }

  .section_three {
    padding: 0rem 12.3rem 19.6rem 12.3rem;
  }
  .form_description {
    display: flex;
    flex-direction: column;
    > label {
      font-family: ${({ theme }) => theme.FONTS.Secondary};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }
    > textarea {
      height: 17.2rem;
      width: 100%;
      resize: none;
      padding: 1.4rem;
      font-family: ${({ theme }) => theme.FONTS.Secondary};
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
`;
