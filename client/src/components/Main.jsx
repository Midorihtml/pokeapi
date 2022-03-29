import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import Filter from './Filter';
import Nav from './Nav';
import { filterAscDsc } from '../redux/actions';
import { StyledSearch, ContentCards, StyledLinkCard } from './styled/main';


const Main = () => {
    let filtered = useSelector(state => state.filtered)
    let pokemons = useSelector(state => state.full);

    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');

    let render = [];
    let found = pokemons.filter(e => e.name === search)
    const paginedPokemons = pokemons.slice(currentPage, currentPage + 12)
    const paginedFilter = filtered.slice(currentPage, currentPage + 12)

    if (search === '' || found.length === 0) {
        render = paginedPokemons;
    } else { render = found }

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    const nextPage = () => {

        if (pokemons.slice(currentPage + 12, currentPage + 24).length > 0
            ||
            filtered.slice(currentPage + 12, currentPage + 24).length > 0) {
            setCurrentPage(currentPage + 12)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 12)
        }
    }

    const onSort = (e, select) => {
        let ascKey = select;
        let ascValue = e.target.value
        dispatch(filterAscDsc(ascKey, ascValue))
    }

    return (
        <>
            <Nav />
            <div>
                <StyledSearch
                    type='text'
                    onChange={onSearch}
                    placeholder='Search Pokemón'
                />
            </div>
            <div>
                {
                    render.length > 0 || paginedFilter.length > 0 ?
                        <Filter
                            onSort={onSort}
                            next={nextPage}
                            prev={prevPage}
                        />
                        : null
                }
            </div>
            <ContentCards>
                {
                    paginedFilter.length > 0 ?
                        paginedFilter.map((e, index) => (
                            <StyledLinkCard key={index} to={`/Detail/${e.name}`}>
                                <PokemonCard
                                    key={e.name}
                                    image={e.image}
                                    name={e.name}
                                    types={e.types}
                                />
                            </StyledLinkCard>
                        ))
                        :
                        render.length > 0 ?
                            render.map((e, index) => (
                                <StyledLinkCard key={index} to={`/Detail/${e.name}`}>
                                    <PokemonCard
                                        key={e.name}
                                        image={e.image}
                                        name={e.name}
                                        types={e.types}
                                    />
                                </StyledLinkCard>
                            ))
                            :
                            <img src='https://i.pinimg.com/originals/a7/a8/d0/a7a8d06c754cfbbbc37e64cb118c513c.gif' alt='pikachu' />
                }
            </ContentCards>
        </>
    )
}

export default Main