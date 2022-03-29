import {
    GET_ALL_POKEMONS,
    GET_FULL, CREATE_POKEMON,
    FILTERED_TYPE, FILTERED_NAME,
    FILTERED_ATTACK, FILTERED_CREATED, FILTERED_ASC_DSC,
    RESET_FILTER
} from '../actions';

const initialState = {
    pokemons: [],
    full: [],
    filtered: [],
    created: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            }
        case GET_FULL:
            return {
                ...state,
                full: action.payload,
            }
        case CREATE_POKEMON:
            return {
                ...state,
                created: action.payload
            }
        case FILTERED_TYPE:
            const key = action.payload.key;
            const value = action.payload.value

            const filterPokemon = state.full.filter(e => {
                return e[key].includes(value)
            })
            return {
                ...state,
                filtered: filterPokemon
            }
        case FILTERED_NAME:

            const nameKey = action.payload.key;

            const filterName = state.full.slice().sort(function (a, b) {
                if (a[nameKey] > b[nameKey]) {
                    return 1;
                }
                if (a[nameKey] < b[nameKey]) {
                    return -1;
                }
                return 0;
            });
            return {
                ...state,
                filtered: filterName
            }
        case FILTERED_ATTACK:

            const attackKey = action.payload.key;

            const filterAttack = state.full.slice().sort(function (a, b) {
                if (a[attackKey] > b[attackKey]) {
                    return 1;
                }
                if (a[attackKey] < b[attackKey]) {
                    return -1;
                }
                return 0;
            });
            return {
                ...state,
                filtered: filterAttack
            }
        case FILTERED_CREATED:

            const filterCreated = state.full.filter(e => {
                return e.id.length > 10
            })
            return {
                ...state,
                filtered: filterCreated
            }
        case FILTERED_ASC_DSC:
            const ascKey = action.payload.key;
            const ascValue = action.payload.value;

            let filterAscDsc = state.full.slice();
            if (ascKey === 'name') {
                if (ascValue === 'Ascendent') {
                    filterAscDsc.sort(function (a, b) {
                        if (a[ascKey] > b[ascKey]) {
                            return 1;
                        }
                        if (a[ascKey] < b[ascKey]) {
                            return -1;
                        }
                        return 0;
                    });
                } else {
                    filterAscDsc.sort(function (a, b) {
                        if (a[ascKey] < b[ascKey]) {
                            return 1;
                        }
                        if (a[ascKey] > b[ascKey]) {
                            return -1;
                        }
                        return 0;
                    });
                }
            }
            if (ascKey === 'attack') {
                if (ascValue === 'Ascendent') {
                    filterAscDsc.sort(function (a, b) {
                        if (a[ascKey] > b[ascKey]) {
                            return 1;
                        }
                        if (a[ascKey] < b[ascKey]) {
                            return -1;
                        }
                        return 0;
                    });
                } else {
                    filterAscDsc.sort(function (a, b) {
                        if (a[ascKey] < b[ascKey]) {
                            return 1;
                        }
                        if (a[ascKey] > b[ascKey]) {
                            return -1;
                        }
                        return 0;
                    });
                }
            }
            if (ascKey === 'created') {
                if (ascValue === 'Descendent') {
                    filterAscDsc = state.filtered.slice().sort(function (a, b) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    });
                } else {
                    filterAscDsc = state.filtered.slice().sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                }
            }
            if (ascKey === 'all' || ascKey === '') {
                return {
                    ...state,
                    filtered: []
                }
            }

            return {
                ...state,
                filtered: filterAscDsc
            }
        case RESET_FILTER:
            return {
                ...state,
                filtered: []
            }

        default: return state;
    }
}