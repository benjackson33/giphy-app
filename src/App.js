import './App.css';
import SearchBar from './SearchBar';
import VsScreen from './VsScreen';
import VictoryScreen from './VictoryScreen';
import { useState } from 'react';

function App() {

  const [searchParams, setSearchParams] = useState([''])
  
  function storeParams(newParams){
    setSearchParams(newParams)
  }

  return (
    <div className="App">
      <h1>Giphy App</h1>
      <SearchBar storeParams={storeParams}/>
      <VsScreen searchTerm1 ='cats' searchTerm2 ='dogs'/>
      <VictoryScreen />

    </div>
  );
}

export default App;
