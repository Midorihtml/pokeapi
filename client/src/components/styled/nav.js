import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const StyledDiv = styled.div`
display: grid;
grid-template-columns: 50% 50%;
`;


const StyledNav = styled(NavLink)`
text-decoration: none;
color: #040110;
padding-top: 20px;
padding-bottom: 3px;
margin-bottom: 5px;
background-color: #CECCD5;
border-bottom: 1px solid #0003;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
box-shadow: 0 0 32px #85929E;
font-family: 'Press Start 2P';
font-size: 1em;
transition: 0.16s;

&:hover{
    background-color: #FABC11 ;
    box-shadow: 0 1px 32px #FABC11;
    margin-bottom: 0px;
}
`;



export { StyledDiv, StyledNav }