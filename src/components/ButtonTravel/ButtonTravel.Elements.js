import styled from 'styled-components';

export const ButtonContainer = styled.div`
    width: 120px;
    height: 35px;
    background-color: #4364d0;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 3px 2px 4px 0 rgba(174, 174, 174, 0.5);

    &:hover{
        opacity: 0.8;
    }
`;

export const Icon = styled.img`
    
`;

export const Title = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-left: -15px;
`;