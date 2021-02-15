import "./scss/main.scss";
import SelectField from "./components/SelectField/SelectField";
import SearchBar from "./components/SearchBar/SearchBar";
import OutputField from "./components/OutputField/OutputField";
import React, { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');

  return (
    <div className="app-container">
      <SelectField />
      <SearchBar search={search} setSearch={setSearch}/>
      <OutputField search={search}/>   
    </div>
  );
}

export default App;
