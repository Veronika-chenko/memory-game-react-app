import { useEffect, useState } from 'react';
import { cardList } from './cards';
import { Card } from './components/Card/Card';
import { Container, Grid } from "./App.styled";

export const App = () => {
  const [cards, setCards] = useState(null);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  useEffect(() => {
    flipCard()
  }, [])

  useEffect(() => {
    if(choiceOne && choiceTwo) {
      // console.log("🚀", choiceOne, choiceTwo)
      
      if(choiceOne.src === choiceTwo.src) {
        // console.log("equal")
        setCards(prev => {
          return prev.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            }
            return card
          })
        })
      }
      // } else {
      //   console.log("not equal")
      // }
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

  return (
    <Container>
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

