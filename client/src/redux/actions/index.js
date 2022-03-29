import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_FULL = 'GET_FULL';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const FILTERED_TYPE = 'FILTERED_TYPE';
export const FILTERED_NAME = 'FILTERED_NAME';
export const FILTERED_ATTACK = 'FILTERED_ATTACK';
export const FILTERED_CREATED = 'FILTERED_CREATED';
export const FILTERED_ASC_DSC = 'FILTERED_ASC_DSC';
export const RESET_FILTER = 'RESET_FILTER'

export const getAllP = () => {
    return dispatch => {
        axios('http://localhost:3001/pokemons')
            .then(pokemon => {
                return dispatch({
                    type: GET_ALL_POKEMONS,
                    payload: pokemon.data
                })
            }).catch(e => {
                console.log(e, 'get all failed')
            })
    }
}

export const getFull = () => {
    return dispatch => {
        axios('http://localhost:3001/pokemons/full')
            .then(full => {
                return dispatch({
                    type: GET_FULL,
                    payload: full.data
                })
            }).catch(e => {
                console.log(e, 'get full failed')
            })
    }
}

export const createPokemon = (values) => {
    return dispatch => {
        axios.post('http://localhost:3001/pokemons', values)
            .then(response => {
                return dispatch({
                    type: CREATE_POKEMON,
                    payload: response.data
                })
            }).catch(e => {
                console.log(e, 'create pokemon failed')
            })
    }
}

export const filter = (key, value) => {

    return {
        type: FILTERED_TYPE,
        payload: {
            key,
            value
        }
    }
}

export const filterName = (key) => {

    return {
        type: FILTERED_NAME,
        payload: {
            key
        }
    }
}

export const filterAttack = (key) => {
    return {
        type: FILTERED_ATTACK,
        payload: { key }
    }
}

export const filterCreated = () => {
    return {
        type: FILTERED_CREATED,
    }
}

export const filterAscDsc = (key, value) => {

    return {
        type: FILTERED_ASC_DSC,
        payload: {
            key,
            value
        }
    }
}

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    }
}