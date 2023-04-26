import { cardList } from './cards';
import { Container, Grid } from "./App.styled";
import { useEffect, useState } from 'react';
import { Card } from './components/Card/Card';

export const App = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    flipCard()
  }, [])

  function flipCard() {
    const newCardList = [...cardList, ...cardList]
    .sort(() => 0.5 - Math.random())
    .reduce((acc, card, index) => [...acc, {...card, id: Date.now() + index}], []);

    setCards(newCardList);
  }
  return (
    <Container>
      <Grid>
        {cards && cards.map(card => <Card key={card.id} card={card}/>)}
      </Grid>
    </Container>
  );
}

