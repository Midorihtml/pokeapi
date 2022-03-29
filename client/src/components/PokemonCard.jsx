import React from 'react'
import { PokemonContent, StyledH2, StyledImg, StyledLi, StyledUl } from './styled/pokemonCard'

const PokemonCard = ({ name, image, types }) => {
    return (
        <PokemonContent types={types}>
            <StyledImg src={image} alt={`${name}`} />
            <StyledH2>{name}</StyledH2>
            <StyledUl>
                {
                    types.length > 1 ?
                        types.map((type, index) => (
                            <StyledLi key={index}>{type}</StyledLi>
                        ))
                        :
                        <StyledLi>{types}</StyledLi>
                }
            </StyledUl>
        </PokemonContent>
    )
}

export default PokemonCard