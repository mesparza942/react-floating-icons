import styled from "styled-components";

export const Image = styled.img`
  top: ${({ top }: { top: string }) => top};
  left: ${({ left }: { left: string }) => left};
  width: ${({ width }: { width: string }) => width || "auto"};
  height: ${({ height }: { height: string }) => height || "auto"};
  animation-duration: ${({
    animationDuration,
  }: {
    animationDuration: string;
  }) => animationDuration ?? "3s"};
`;

export const CustomItem = styled.div`
  top: ${({ top }: { top: string }) => top};
  left: ${({ left }: { left: string }) => left};
`;

export const StyledFLoatingIconsContainer = styled.div`
  display: flex;

  > div {
    ${({ imagePath, color }: { imagePath: string; color: string }) =>
      imagePath
        ? `background-image: url(${imagePath})`
        : `background-color: ${color || "transparent"}`};
    background-repeat: no-repeat;
    background-size: contain;
    width: ${({ width }: { width: string }) => width};
    height: ${({ height }: { height: string }) => height};
  }

  .floating,
  img {
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    position: absolute;
    animation-name: floating;

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
