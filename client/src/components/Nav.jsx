import React from 'react'
import { StyledDiv, StyledNav } from './styled/nav'

const Nav = () => {
    return (
        <StyledDiv>
            <StyledNav to='/Main'>
                Main
            </StyledNav>
            <StyledNav to='/Create'>
                Create a Pokemon
            </StyledNav>
        </StyledDiv>
    )
}

export default Nav