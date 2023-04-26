import { Back, Front, Container, InnerWrap } from "./Card.styled"

export const Card = ({card}) => {
    if(!card) return;
    // console.log("card:", card)
    const { src } = card;
    return (
        <Container>
            <InnerWrap>
                <Front src={src} alt="flower"/>
                <Back />
            </InnerWrap>
        </Container>
    )
}