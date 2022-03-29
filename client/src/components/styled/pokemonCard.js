import styled from 'styled-components';
import { css } from 'styled-components';



const PokemonContent = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-template-columns: 200px;
    grid-template-rows: 150px 50px 60px;
    border-radius: 5px;

    &:hover{
        box-shadow: 0 2px 8px 3px #85929E;
    }

    ${props => props.types[0] === 'normal' && css`
    background-image: radial-gradient(white,#A78C0E);
    `}
    ${props => props.types[0] === 'fighting' && css`
    background-image: radial-gradient(white,#A73E0E);
    `}
    ${props => props.types[0] === 'flying' && css`
    background-image: radial-gradient(white,#FBDACB);
    `}
    ${props => props.types[0] === 'poison' && css`
    background-image: radial-gradient(white,#D6CBFB);
    `}
    ${props => props.types[0] === 'ground' && css`
    background-image: radial-gradient(white,#948E8E);
    `}
    ${props => props.types[0] === 'rock' && css`
    background-image: radial-gradient(white,#919191);
    `}
    ${props => props.types[0] === 'bug' && css`
    background-image: radial-gradient(white,#CFC886) ;
    `}
    ${props => props.types[0] === 'ghost' && css`
    background-image: radial-gradient(white,#6F98FC);
    `}
    ${props => props.types[0] === 'steel' && css`
    background-image: radial-gradient(white,#ACBFED);
    `}
    ${props => props.types[0] === 'fire' && css`
    background-image: radial-gradient(white,#FFB371);
    `}
    ${props => props.types[0] === 'water' && css`
    background-image: radial-gradient(white,#7EDDEC);
    `}
    ${props => props.types[0] === 'grass' && css`
    background-image: radial-gradient(white, #7EECCF) ;
    `}
    ${props => props.types[0] === 'electric' && css`
    background-image: radial-gradient(white,#E7EC7E);
    `}
    ${props => props.types[0] === 'psychic' && css`
    background-image: radial-gradient(white,#FDB9D4);
    `}
    ${props => props.types[0] === 'ice' && css`
    background-image: radial-gradient(white,#CCF7FD);
    `}
    ${props => props.types[0] === 'dragon' && css`
    background-image: radial-gradient(white,#FF8355);
    `}
    ${props => props.types[0] === 'dark' && css`
    background-image: radial-gradient(white,#7B7877);
    `}
    ${props => props.types[0] === 'fairy' && css`
    background-image: radial-gradient(white,#EA93F7);
    `}
    ${props => props.types[0] === 'unknown' && css`
    background-image: radial-gradient(white,#FCFBFC);
    `}
    ${props => props.types[0] === 'shadow' && css`
    background-image: radial-gradient(white,#C1B6C3);
    `}
`;

const StyledImg = styled.img`
    grid-row-start: 1; 
    grid-column-start: 1;
    border-radius: 50%;
    background-color: white;
    height: 150px;
    width: 150px;
    margin: 15px 25px;
    box-shadow: 1px 1px 5px 3px #BDBDBD;
`;

const StyledH2 = styled.h2`
    grid-row-start: 2; 
    grid-column-start: 1;
    align-content: center;
    font-family: 'Press Start 2P';
    font-size: 15px;
    color: #322424;
    margin-top: 25px;
`;

const StyledUl = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
font-size: 14px;
color: #626262;
margin-top: 0px;
margin-right: 40px;
`;

const StyledLi = styled.li`
`;



export { PokemonContent, StyledImg, StyledH2, StyledLi, StyledUl }