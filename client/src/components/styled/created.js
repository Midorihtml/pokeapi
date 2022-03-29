import styled from 'styled-components';

const PokemonContentC = styled.div`
    display: flex;
    flex-direction: column;
    background-image: radial-gradient(white,#EDC935);
    width: 600px;
    height: 700px;
    margin-top: 20px;
    margin-left: 320px;
    border: transparent;
    border-radius: 8px;
    box-shadow: 0 3px 5px 2px #7C7C7C ;
    -webkit-text-stroke: 0.5px;
`;
const StyledImgC = styled.img`
   height: 500px;
`;


export { PokemonContentC, StyledImgC }