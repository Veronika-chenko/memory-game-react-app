import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  SettingsButton,
  ThemeButtonsWrap,
} from "./ThemeSwitcherMobile.styled";

import { ReactComponent as CoffeeIcon } from "../../img/themeButtons/coffee.svg";
import { ReactComponent as FlowersIcon } from "../../img/themeButtons/rose.svg";
import { ReactComponent as MusicIcon } from "../../img/themeButtons/music-note.svg";

export const ThemeSwitcherMobile = ({ setThemeByName, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (!menuRef.current.contains(e.target)) {
        toggleMenu();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleButtonClick = (e) => {
    setThemeByName(e);
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <Container menuOpen={menuOpen} ref={menuRef}>
      <SettingsButton onClick={toggleMenu} menuOpen={menuOpen} />
      <ThemeButtonsWrap>
        <Button
          onClick={(e) => handleButtonClick(e)}
          name="coffee"
          theme={theme}
        >
          <CoffeeIcon />
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e)}
          name="flowers"
          theme={theme}
        >
          <FlowersIcon />
        </Button>
        <Button
          onClick={(e) => handleButtonClick(e)}
          name="music"
          theme={theme}
        >
          <MusicIcon />
        </Button>
      </ThemeButtonsWrap>
    </Container>
  );
};

ThemeSwitcherMobile.propTypes = {
  setThemeByName: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["coffee", "flowers", "music"]).isRequired,
};
