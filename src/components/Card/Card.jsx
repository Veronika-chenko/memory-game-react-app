import { Back, Front, InnerWrap } from "./Card.styled"

export const Card = ({card, handleChoice, flipped}) => {
    const { src, matched } = card;
    
    const handleClick = () => {
        if(matched || flipped) return;
        handleChoice(card);
    }
    
    return (
        <InnerWrap flipped={flipped} onClick={handleClick}>
            <Front src={src} alt="flower"/>
            <Back />
        </InnerWrap>
    )
}