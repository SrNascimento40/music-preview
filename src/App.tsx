import React, { useState } from 'react';
import AlbumList from './components/AlbumList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Default from './template/default'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSetTerm = (value: string) => {
    console.log(value)
    setSearchTerm(value)
  }

  return (
    <Default>
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        handleSetTerm={handleSetTerm}
      />
      <AlbumList title={
        searchTerm 
        ? `Resultados encontrados para ${searchTerm}`
        : 'Álbuns buscados recentemente'} />

      {searchTerm && <AlbumList />}
    </Default>
  );
}

export default App;
