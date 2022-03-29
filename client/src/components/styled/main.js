import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearch = styled.input`
    height: 20px;
    width: 300px;
    border-radius: 5px;
    border: transparent;
    border-color: transparent;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover{
        box-shadow: 0 2px 8px 3px #85929E;
        outline: none;
        transition: 0.16s;
    }
    
    &:focus{
        box-shadow: 0 2px 8px 3px #1471DA  ;
        outline: none;
        transition: 0.16s;
    }
`;

const ContentCards = styled.div`
    display: grid;
    margin-top: 55px;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px; 
`;

const StyledLinkCard = styled(NavLink)`
    text-decoration: none;
    border-radius: 3px;
    box-shadow: 2px 2px 1px 1px #85929E ;
`;

export { StyledSearch, ContentCards, StyledLinkCard }