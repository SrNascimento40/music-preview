import React, { useState } from 'react';
import AlbumList from '../../components/AlbumList';
import SearchBar from '../../components/SearchBar';
import { Container } from './styles';


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSetTerm = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <Container>
      <SearchBar
        searchTerm={searchTerm}
        handleSetTerm={handleSetTerm}
      />
      <AlbumList title={
        searchTerm 
        ? `Resultados encontrados para ${searchTerm}`
        : 'Álbuns buscados recentemente'} />

      {searchTerm && <AlbumList />}
    </Container>
  );
}
