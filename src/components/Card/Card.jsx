import PropTypes from 'prop-types';
import { Back, Front, InnerWrap } from './Card.styled';

export const Card = ({ card, handleChoice, flipped }) => {
  const { src, matched } = card;

  const handleClick = () => {
    if (matched || flipped) return;
    handleChoice(card);
  };

  return (
    <InnerWrap flipped={flipped} onClick={handleClick}>
      <Front src={src} alt='flower' />
      <Back />
    </InnerWrap>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    src: PropTypes.string.isRequired,
    matched: PropTypes.bool.isRequired,
  }),
  handleChoice: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
};
