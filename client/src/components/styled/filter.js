import styled from 'styled-components';

const BackStyled = styled.button`
filter: brightness(1.1);
mix-blend-mode: multiply;
border: none;

position: absolute;
left: 10px;
bottom: 40%;
opacity: 80%;
`;

const BackImage = styled.img`
width: 140px;
`;

const NextStyled = styled.button`
filter: brightness(1.1);
mix-blend-mode: multiply;
border: none;

position: absolute;
right: 10px;
bottom: 40%;
opacity: 80%;

`;

const NextImage = styled.img`
width: 140px;
transform: rotate(-180deg);
`;

const FilterContent = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 1fr;
    column-gap: 10px;
    justify-content: center;
`;

const StyledSelect = styled.select`
    text-align: center;
    border: transparent;
    border-radius: 3px;
    &:hover{
        border: 1px solid #FABC11;
        box-shadow: 0 0 3px 2px #FABC11;
        transition: 0.16s;
    }
`;



export { BackStyled, BackImage, NextStyled, NextImage, FilterContent, StyledSelect }