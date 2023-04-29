import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 0 auto; 
    padding: 84px 16px;
`

export const NewGameButton = styled.button`
    min-width: 197px;
    height: 52px;
    padding: 0 30px;
    margin-bottom: 42px;
    border-radius: 4px;

    font-family: inherit;
    font-size: 18px;
    line-height: calc(22px / 18px);

    color: #ebebeb;
    background-color: #00554e;
`

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2px;

    width: 100%;
    height: calc(100vw - 32px - ((100vw - 32px) / 4));
    
    @media screen and (min-width: 450px) {
        width: 400px;
        height: 300px;
    }
`