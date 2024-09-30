import { useTheme } from "../../hooks/useTheme";
import {
  ThemeButtonsWrap,
  CoffeeIcon,
  FlowersIcon,
  MusicIcon,
  Button,
} from "./ThemeSwitcher.styled";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const setThemeByName = (e) => {
    setTheme(e.currentTarget.name);
  };

  return (
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
  );
};
