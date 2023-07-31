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

  return (
    <div className="App">
      <h1>Giphy App</h1>
      <SearchBar storeParams={storeParams}/>
      <VsScreen searchTerm1 ='cats' searchTerm2 ='dogs'/>
      {(isGameStarted && searchParams.length===1) && <VictoryScreen winner={searchParams[0]}/>}

    </div>
  );
}

export default App;
