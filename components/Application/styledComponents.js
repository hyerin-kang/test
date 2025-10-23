import styled from "styled-components";

export const SectionTitle = styled.h1``;

export const TitleHover = styled.div`
  height: fit-content;
  display: inline-block;
  .title {
    span {
      background: linear-gradient(to right, white, white),
        linear-gradient(to right, black, black);
      background-size: 100% 1px, 0 1px;
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
      transition: background-size 400ms;
    }
  }

  &:hover {
    .title {
      span {
        background-size: 0 1px, 100% 1px;
      }
    }
  }
`;
