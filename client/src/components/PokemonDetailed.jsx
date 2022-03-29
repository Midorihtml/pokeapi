import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from './Loading';
import Nav from './Nav';

export const PokemonDetailed = () => {

    const { name } = useParams();
    let state = useSelector(state => state.full).filter(e => {
        return e.name === name
    });

    return (
        <>
            <Nav />
            {
                Object.keys(state).length > 0 ?
                    <div>
                        <img src={state[0].image} alt='' />
                        <div>Id: {state[0].id}</div>
                        <div>Name: {state[0].name}</div>
                        <div>Hp: {state[0].hp}</div>
                        <div>Attack: {state[0].attack}</div>
                        <div>Defense: {state[0].defense}</div>
                        <div>Speed: {state[0].speed}</div>
                        <div>Height: {state[0].height}</div>
                        <div>Weight: {state[0].weight}</div>
                        <ul>
                            {
                                state[0].types.length > 1 ?
                                    state[0].types.map((type, index) => (
                                        <li key={index}>{type}</li>
                                    ))
                                    :
                                    <li>{state[0].types}</li>
                            }
                        </ul>
                    </div>
                    :
                    <Loading />
            }
        </>
    )
}
