import PropTypes from "prop-types";
import { ThemeButtonsWrap, Button } from "./ThemeSwitcher.styled";

import { ReactComponent as CoffeeIcon } from "../../img/themeButtons/coffee.svg";
import { ReactComponent as FlowersIcon } from "../../img/themeButtons/rose.svg";
import { ReactComponent as MusicIcon } from "../../img/themeButtons/music-note.svg";

export const ThemeSwitcher = ({ setThemeByName, theme }) => {
  return (
    <>
      <ThemeButtonsWrap>
        <Button onClick={(e) => setThemeByName(e)} name="coffee" theme={theme}>
          <CoffeeIcon />
        </Button>
        <Button onClick={(e) => setThemeByName(e)} name="flowers" theme={theme}>
          <FlowersIcon />
        </Button>
        <Button onClick={(e) => setThemeByName(e)} name="music" theme={theme}>
          <MusicIcon />
        </Button>
      </ThemeButtonsWrap>
    </>
  );
};

ThemeSwitcher.propTypes = {
  setThemeByName: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["coffee", "flowers", "music"]).isRequired,
};
