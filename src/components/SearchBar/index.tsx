import React from 'react'
import { Container, Input, Label } from './styles'
import { iSearchBar } from './types'

export default function SearchBar({handleSetTerm, searchTerm}: iSearchBar) {
  return (
    <Container>
      <Label>Busque por artistas, albuns ou músicas</Label>
      <Input
       onChange={(e) => handleSetTerm(e.target.value) }
       placeholder='O que você quer ouvir?' />
    </Container>
  )
}
