import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 0 auto; 
    padding: 84px 16px;
`

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2px;

    width: 400px;
    height: 300px;
`