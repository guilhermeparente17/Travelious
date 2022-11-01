import styled from 'styled-components'

export const ButtomContainer = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 25px;
    background-color: #fff;
    color: blue;
    margin-right: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        background-color: #ccc;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 700px){
        display: none;
    }
`;