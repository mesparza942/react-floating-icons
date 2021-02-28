import styled from "styled-components";

export const Image = styled.img`
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;

export const CustomItem = styled.div`
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const StyledFLoatingIconsContainer = styled.div`
  display: flex;

  > div {
    ${({ imagePath, color }) =>
      imagePath
        ? `background-image: url(${imagePath})`
        : `background-color: ${color || "transparent"}`};
    background-repeat: no-repeat;
    background-size: contain;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "400px"};
  }

  .floating,
  img {
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    position: absolute;
    animation-name: floating;
    animation-duration: ${({ animationDuration }) => animationDuration ?? "3s"};

    @keyframes floating {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 30px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }

  .white-text {
    color: white;
  }
`;
