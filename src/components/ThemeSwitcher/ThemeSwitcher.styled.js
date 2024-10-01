import styled from "styled-components";

export const ThemeButtonsWrap = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 20px;
    right: 20px;

    display: flex;
    gap: 8px;
    margin-bottom: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  padding: 8px;
  border-radius: 4px;

  background-color: ${(p) =>
    p.theme === p.name ? "var(--accent-background)" : "transparent"};

  svg {
    width: 24px;
    height: 24px;
    fill: ${(p) =>
      p.theme === p.name ? "#f6f6f4" : "var(--accent-background)"};
  }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
