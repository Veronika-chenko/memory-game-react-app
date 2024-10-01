import styled from "styled-components";

import settingIcon from "../../img/settings-icon.svg";
import cross from "../../img/cross.svg";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  z-index: 1;
  transform: ${(p) => (p.menuOpen ? "translateX(0)" : "translateX(80px)")};
  transition: transform 250ms linear;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SettingsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;
  margin-top: 24px;
  padding: 8px;
  padding-left: 12px;

  border-radius: 30px 0 0 30px;

  background-image: url(${(p) => (p.menuOpen ? cross : settingIcon)});
  background-color: lightgray;
  background-repeat: no-repeat;
  background-position: center left 18px;
  background-size: 24px;
`;

export const ThemeButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  height: 100vh;
  background-color: lightgray;
  padding: 24px 12px;
  /* margin-bottom: 24px; */
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
    pointer-events: none;
    width: 24px;
    height: 24px;
    /* fill: ${(p) =>
      p.theme === p.name ? "#ebebeb" : "var(--accent-background)"}; */
    fill: ${(p) =>
      p.theme === p.name ? "#f6f6f4" : "var(--accent-background)"};
  }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
