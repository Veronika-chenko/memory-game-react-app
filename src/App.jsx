import { useEffect, useState } from 'react';
import { cardList } from './cards';
import { Card } from './components/Card/Card';
import { Container, Grid, NewGameButton } from "./App.styled";

export const App = () => {
  const [cards, setCards] = useState(null);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  // const [score, setScore] = useState(0);

  useEffect(() => {
    flipCard()
  }, [])

  useEffect(() => {
    if(choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        // setScore(prev => prev + 1);
        setCards(prev => {
          return prev.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            }
            return card
          })
        })
      }
      setTimeout(() => turnBack(), 500);
    }
  }, [choiceOne, choiceTwo])

  //  flipCard - start function
  const flipCard = () => {
    const newCardList = [...cardList, ...cardList]
    .sort(() => 0.5 - Math.random())
    .reduce((acc, card, index) => [...acc, {...card, id: Date.now() + index}], []);

    setCards(newCardList);
  }

  // handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const turnBack = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  }

  const newGame = () => {
    turnBack();
    // setScore(0);
    setCards(prev => prev.map(card => ({...card, matched: false})));
  }

  return (
    <Container>
      {/* <p>Score: {score}/{ cards?.length/2}</p> */}
      <NewGameButton onClick={newGame}>New Game</NewGameButton>
      <Grid>
        {cards && cards.map(card => 
          <Card 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}
          flipped={card.matched || card.id === choiceOne?.id || card.id === choiceTwo?.id} />
          )}
      </Grid>
    </Container>
  );
}

