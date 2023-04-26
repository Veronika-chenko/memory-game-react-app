import styled from "styled-components";

export const Container = styled.li`
    /* width: 100px; */
    /* height: 100px; */
`
export const InnerWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #000;
    cursor: pointer;
`

export const Front = styled.img`
    position: absolute;
    width: 80%;
    height: 80%;
    transform: rotateY(90deg);
`

export const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #03453b;
    /* transform: rotateY(90deg); */
`