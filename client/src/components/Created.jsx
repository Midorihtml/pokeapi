import React from 'react'
import { useSelector } from 'react-redux'
import { PokemonContentC, StyledImgC } from './styled/created'

const Created = () => {
    const created = useSelector(state => state.created);

    return (
        <>
            <PokemonContentC>
                <StyledImgC src={created.image} alt='' />
                <div>Id: {created.id}</div>
                <div>Name: {created.name}</div>
                <div>Hp: {created.hp}</div>
                <div>Attack: {created.attack}</div>
                <div>Defense: {created.defense}</div>
                <div>Speed: {created.speed}</div>
                <div>Height: {created.height}</div>
                <div>Weight: {created.weight}</div>
            </PokemonContentC>
        </>
    )
}

export default Created