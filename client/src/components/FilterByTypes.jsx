import React from 'react'
import { useDispatch } from 'react-redux'
import { filter } from '../redux/actions'
import { StyledSelect } from './styled/filterByTypes'
const FilterByTypes = () => {
    const dispatch = useDispatch()

    const onTypes = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        dispatch(filter(key, value))
    }

    return (
        <div>
            <StyledSelect name="types" id="type" onChange={onTypes}>
                <option value="Type">Type</option>
                <option value="normal">Normal</option>
                <option value="fighting">Fighting</option>
                <option value="flying">Flying</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
                <option value="bug">Bug</option>
                <option value="ghost">Ghost</option>
                <option value="steel">Steel</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="fairy">Fairy</option>
                <option value="unknown">Unknown</option>
                <option value="shadow">Shadow</option>
            </StyledSelect>
        </div>
    )
}

export default FilterByTypes