import './App.css';
import SearchBar from './SearchBar';
import VsScreen from './VsScreen';
import VictoryScreen from './VictoryScreen';
import { useState } from 'react';

function App() {

  const [searchParams, setSearchParams] = useState([''])
  const [isGameStarted, setIsGameStarted] = useState(false)
  
  function storeParams(newParams){
    setSearchParams(newParams)
    setIsGameStarted(true)
  }

  function removeElement(index){
    setSearchParams(params => params.filter((e, idx) => idx !== index)
    )
  }

  return (
    <div className="App">
      <div className='gradient-background'>
      <h1>Giphy App</h1>
      <SearchBar storeParams={storeParams}/>
      {(isGameStarted && searchParams.length > 1) && <VsScreen searchTerm1 ={searchParams[0]} searchTerm2 ={searchParams[1]} removeElement={removeElement}/>}
      {(isGameStarted && searchParams.length===1) && <VictoryScreen winner={searchParams[0]}/>}
      </div>
    </div>
  );
}

export default App;
