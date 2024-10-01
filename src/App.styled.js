import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1000px;

  margin: 0 auto;
  padding: 84px 16px;
  padding: 120px 16px 24px;
`;

export const NewGameButton = styled.button`
  min-width: 197px;
  height: 52px;
  padding: 0 30px;
  margin-bottom: 32px;
  border-radius: 4px;

  font-family: inherit;
  font-size: 18px;
  line-height: calc(22px / 18px);

  color: var(--text);
  background-color: var(--accent-background);
  box-shadow: var(--btn-shadow);
`;

export const Turns = styled.p`
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: 600;
  color: #020d19;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 4px;

  width: 100%;
  height: calc(100vw - 32px - ((100vw - 32px) / 4));

  @media screen and (min-width: 450px) {
    width: 400px;
    height: 300px;
  }
`;
