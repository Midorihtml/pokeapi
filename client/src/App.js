import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getFull } from './redux/actions'
import Home from './components/Home';
import Main from './components/Main';
import CreatePokemon from './components/CreatePokemon';
import { PokemonDetailed } from './components/PokemonDetailed';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFull())
  })



  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/Create' element={<CreatePokemon />} />
        <Route path='/Detail/:name' element={<PokemonDetailed />} />
      </Routes>
    </div>
  )
}

export default App;
