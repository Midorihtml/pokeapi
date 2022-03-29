import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from './Input'
import { createPokemon } from '../redux/actions'
import Created from './Created'
import Nav from './Nav'

const CreatePokemon = () => {
    const dispatch = useDispatch()
    const created = useSelector(state => state.created);

    const validation = {
        name: /[a-zA-Z]{4,16}/,
        number: /^\d{1}$|^\d{2}$|^\d{3}$|^\d{4}$/,
        image: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    }

    const [data, setData] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        typeId: [],
    })

    const [nameError, setNameError] = useState('')
    const [hpError, setHpError] = useState('')
    const [attackError, setAttackError] = useState('')
    const [defenseError, setDefenseError] = useState('')
    const [speedError, setSpeedError] = useState('')
    const [heightError, setHeightError] = useState('')
    const [weightError, setWeightError] = useState('')
    const [imageError, setImagetError] = useState('')
    const [select, setSelect] = useState([])

    const dictionarySelect = {
        1: 'normal',
        2: 'fighting',
        3: 'flying',
        4: 'poison',
        5: 'ground',
        6: 'rock',
        7: 'bug',
        8: 'ghost',
        9: 'steel',
        10: 'fire',
        11: 'water',
        12: 'grass',
        13: 'electric',
        14: 'psychic',
        15: 'ice',
        16: 'dragon',
        17: 'dark',
        18: 'fairy',
        10001: 'unknown',
        10002: 'shadow'
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createPokemon(data))
    }
    const onChange = (e) => {
        const types = data.typeId.slice();
        types.push(Number(e.target.value))
        setData({ ...data, typeId: types })
        setSelect([...select, dictionarySelect[Number(e.target.value)]])
    }


    const onClick = (e) => {
        const type = e.target.outerText
        const copy = select.slice().filter(e => { return e !== type })
        setSelect(copy)
    }

    return (
        <>
            <Nav />
            {
                Object.keys(created).length > 0 ? <Created />
                    :
                    <form onSubmit={onSubmit}>
                        <Input
                            error={nameError}
                            setError={setNameError}
                            data={data}
                            setData={setData}
                            type='text'
                            placeholder='Name'
                            name='name'
                            textError='Only letters and 4-16 digits'
                            validation={validation.name}
                            value={data.name}
                        />
                        <Input
                            error={hpError}
                            setError={setHpError}
                            data={data}
                            setData={setData}
                            type='number'
                            placeholder='Hp'
                            name='hp'
                            textError='Only numbers and 1-4 digits'
                            validation={validation.number}
                            value={data.hp}
                        />
                        <Input
                            error={attackError}
                            setError={setAttackError}
                            data={data}
                            setData={setData}
                            type='number'
                            placeholder='Attack'
                            name='attack'
                            textError='Only numbers and 1-4 digits'
                            validation={validation.number}
                            value={data.attack}
                        />
                        <Input
                            error={defenseError}
                            setError={setDefenseError}
                            data={data}
                            setData={setData}
                            type='number'
                            placeholder='Defense'
                            name='defense'
                            textError='Only numbers and 1-4 digits'
                            validation={validation.number}
                            value={data.defense}
                        />
                        <Input
                            error={speedError}
                            setError={setSpeedError}
                            data={data}
                            setData={setData}
                            type='number'
                            placeholder='Speed'
                            name='speed'
                            textError='Only numbers and 1-4 digits'
                            validation={validation.number}
                            value={data.speed}
                        />
                        <Input
                            error={heightError}
                            setError={setHeightError}
                            data={data}
                            setData={setData}
                            type='number'
                            placeholder='Height'
                            name='height'
                            textError='Only numbers and 1-4 digits'
                            validation={validation.number}
                            value={data.height}
                        />
                        <Input
                            error={weightError}
                            setError={setWeightError}
                            data={data}
                            setData={setData}
                            type='number'
                            placeholder='Weight'
                            name='weight'
                            textError='Only numbers and 1-4 digits'
                            validation={validation.number}
                            value={data.weight}
                        />
                        <Input
                            error={imageError}
                            setError={setImagetError}
                            data={data}
                            setData={setData}
                            type='url'
                            placeholder='Url image'
                            name='image'
                            textError='Must be a url'
                            validation={validation.image}
                            value={data.image}
                        />

                        <select onChange={onChange} >
                            <option>Select type</option>
                            <option name='normal' value={1}>Normal</option>
                            <option name='fighting' value={2}>Fighting</option>
                            <option name='flying' value={3}>flying</option>
                            <option name='poison' value={4}>poison</option>
                            <option name='ground' value={5}>ground</option>
                            <option name='rock' value={6}>rock</option>
                            <option name='bug' value={7}>bug</option>
                            <option name='ghost' value={8}>ghost</option>
                            <option name='steel' value={9}>steel</option>
                            <option name='fire' value={10}>fire</option>
                            <option name='water' value={11}>water</option>
                            <option name='grass' value={12}>grass</option>
                            <option name='electric' value={13}>electric</option>
                            <option name='psychic' value={14}>psychic</option>
                            <option name='ice' value={15}>ice</option>
                            <option name='dragon' value={16}>dragon</option>
                            <option name='dark' value={17}>dark</option>
                            <option name='fairy' value={18}>fairy</option>
                            <option name='unknown' value={10001}>unknown</option>
                            <option name='shadow' value={10002}>shadow</option>
                        </select>
                        <button type='submit'>Create</button>

                    </form>
            }
            {
                Object.keys(created).length > 0
                    ?
                    null
                    :
                    <div style={div}>
                        {
                            select.map(e => (
                                <div style={selectedTypes} onClick={onClick} key={e} name={e}>{e}</div>
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default CreatePokemon


const selectedTypes = {
    display: 'flex',
    width: '80px',
    height: '25px',
    backgroundColor: '#2B7DF4',
    margin: '15px',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',

}

const div = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}