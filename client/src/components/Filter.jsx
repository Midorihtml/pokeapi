import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterName, filterAttack, filterCreated, resetFilter } from '../redux/actions';
import FilterByTypes from './FilterByTypes'
import { BackStyled, BackImage, NextStyled, NextImage, FilterContent, StyledSelect } from './styled/filter'

const Filter = ({ next, prev, onSort }) => {

    const [select, setSelect] = useState('');
    const dispatch = useDispatch();

    const onFilter = (e) => {
        e.preventDefault();
        setSelect(e.target.value)
        const nameKey = e.target.value;
        if (nameKey === 'all') {
            dispatch(resetFilter())
        }

        if (nameKey === 'name') {

            dispatch(filterName(nameKey))
        }
        if (nameKey === 'attack') {

            dispatch(filterAttack(nameKey))
        }
        if (nameKey === 'created') {

            dispatch(filterCreated())
        }

    }

    return (
        <>
            <div>
                <BackStyled onClick={prev}><BackImage src='https://t4.ftcdn.net/jpg/02/44/10/73/240_F_244107399_NAbR1gRjvR4OD0e87bJl4dxPyWO5rUq4.jpg' alt='' /></BackStyled>
                <NextStyled onClick={next}><NextImage src='https://t4.ftcdn.net/jpg/02/44/10/73/240_F_244107399_NAbR1gRjvR4OD0e87bJl4dxPyWO5rUq4.jpg' alt='' /></NextStyled>
                <FilterContent>
                    <StyledSelect onChange={onFilter}>
                        <option value='all'>Sort by</option>
                        <option value='name'>Name</option>
                        <option value='attack'>Attack</option>
                        <option value='created'>Created</option>
                    </StyledSelect>
                    <FilterByTypes />
                    <StyledSelect onChange={(e) => onSort(e, select)} >
                        <option name='asc'>Ascendent</option>
                        <option name='dsc'>Descendent</option>
                    </StyledSelect>

                </FilterContent>
            </div>

        </>
    )
}

export default Filter
