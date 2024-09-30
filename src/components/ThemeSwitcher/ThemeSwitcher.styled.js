import styled from "styled-components";

import { ReactComponent as coffeeIcon } from "../../img/themeButtons/coffee.svg";
import { ReactComponent as flowersIcon } from "../../img/themeButtons/rose.svg";
import { ReactComponent as musicIcon } from "../../img/themeButtons/music-note.svg";

export const ThemeButtonsWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${(p) => (p.theme === p.name ? "green" : "transparent")};

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CoffeeIcon = styled(coffeeIcon)`
  fill: red;
`;

export const FlowersIcon = styled(flowersIcon)`
  fill: red;
`;

export const MusicIcon = styled(musicIcon)`
  fill: red;
`;
