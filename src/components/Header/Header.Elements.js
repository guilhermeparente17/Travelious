import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: #4364d0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    position: relative;
    top: 0;
`;

export const HeaderLogo = styled.h1`
    margin-left: 30px;
`;

export const HeaderNav = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    @media screen and (max-width: 700px){
        display: none;
    }
`;

export const HeaderLi = styled.li`
    margin-right: 20px;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 700px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`