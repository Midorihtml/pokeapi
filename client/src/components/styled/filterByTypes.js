import styled from 'styled-components';

const StyledSelect = styled.select`
    text-align: center;
    border: transparent;
    border-radius: 3px;
    height: 23px;
    &:hover{
        border: 1px solid #FABC11;
        box-shadow: 0 0 3px 2px #FABC11;
        transition: 0.16s;
    }
`;

export { StyledSelect }