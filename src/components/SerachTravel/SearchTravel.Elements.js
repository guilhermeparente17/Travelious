import { FaUserAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdOutlineDateRange } from 'react-icons/md';
import styled from 'styled-components'

export const SearchContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 999;
    margin-top: -150px;
`;

export const SearchContent = styled.div`
    width: 60%;
    height: 200px;
`;

export const SearchButtons = styled.div`
    width: 300px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 15px 15px 0px 0px;
    box-shadow: 0 2px 4px 0 rgba(174, 174, 174, 0.5);
`;

export const SearchBar = styled.div`
    width: 100%;
    background-color: #fff;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 15px 15px 15px;
    box-shadow: 0 2px 4px 0 rgba(174, 174, 174, 0.5);
`;

export const SearchOpts = styled.div`
    border: 1px solid #ccc;
    display: flex;
    padding: 20px;
    border-radius: 30px;
    margin-left: ${({marginLeft}) => `${marginLeft}px`};
`;

export const SearchOpt = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const SearchDetails = styled.div`

`;

export const SearchTitle = styled.h4`

`;

export const SearchSpan = styled.span`

`;

export const Location = styled(HiLocationMarker)`
    padding: 10px; 
    background-color: #f2f6f5;
    border-radius: 50%;
    margin-right: 20px;
`;

export const Personal = styled(FaUserAlt)`
    padding: 10px; 
    background-color: #f2f6f5;
    border-radius: 50%;
    margin-right: 20px;
`;

export const Date = styled(MdOutlineDateRange)`
    padding: 10px; 
    background-color: #f2f6f5;
    border-radius: 50%;
    margin-right: 20px;
`;

export const ButtonSearch = styled.button`
    width: 70px;
    height: 60px;
    border-radius: 20px;
    outline: none;
    margin: 0 15px;
    border: none;
    cursor: pointer;
    background-color: #4262ca;

    &:hover{
        opacity: 0.8;
    }
`;