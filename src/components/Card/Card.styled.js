import styled from "styled-components";

export const InnerWrap = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: var(--front-card-background);
  border-radius: 4px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;

  transform: ${(p) => p.flipped && `rotateY(180deg);`};
`;

export const Front = styled.img`
  position: absolute;
  width: 80%;
  height: 80%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--accent-background);
  box-shadow: var(--card-shadow);
  backface-visibility: hidden;
  border-radius: 4px;
`;
