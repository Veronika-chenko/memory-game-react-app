import { useEffect, useState } from "react";
import { fetchCards } from "./api/fetchCards";
import { useTheme } from "./hooks/useTheme";

import { Container, Grid, NewGameButton, Turns } from "./App.styled";
import { Card, ThemeSwitcher } from "./components";
import { ThemeSwitcherMobile } from "./components/ThemeSwitcherMobile";

export const App = () => {
  const { theme, setTheme } = useTheme();
  const [cards, setCards] = useState(null);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turns, setTurns] = useState(0);

  const setThemeByName = (e) => {
    setTheme(e.currentTarget.name);
  };

  useEffect(() => {
    flipCard();
  }, []);

  useEffect(() => {
    newGame();
    const fetchAndSetCards = async () => {
      await flipCard();
    };

    fetchAndSetCards();
  }, [theme]);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
      }
      setTimeout(() => {
        turnBack();
        setTurns((prev) => prev + 1);
      }, 500);
    }
  }, [choiceOne, choiceTwo]);

  //  flipCard - start function
  const flipCard = async () => {
    const cardList = await fetchCards(theme);

    const newCardList = [...cardList, ...cardList]
      .sort(() => 0.5 - Math.random())
      .reduce(
        (acc, card, index) => [...acc, { ...card, id: Date.now() + index }],
        []
      );

    setCards(newCardList);
  };

  const newGame = () => {
    turnBack();
    setTurns(0);
    flipCard();
  };

  // handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const turnBack = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  return (
    <Container>
      <ThemeSwitcherMobile setThemeByName={setThemeByName} theme={theme} />
      <ThemeSwitcher setThemeByName={setThemeByName} theme={theme} />
      <NewGameButton onClick={newGame}>New Game</NewGameButton>
      <Turns>Turns: {turns}</Turns>
      <Grid>
        {cards &&
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={
                card.matched ||
                card.id === choiceOne?.id ||
                card.id === choiceTwo?.id
              }
            />
          ))}
      </Grid>
    </Container>
  );
};
