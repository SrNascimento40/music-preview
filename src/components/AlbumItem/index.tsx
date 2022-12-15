import React from 'react'
import { AlbumFolder, Container, Description, Title } from './styles'

export default function AlbumItem() {
  return (
    <Container>
      <AlbumFolder src='https://via.placeholder.com/175'/>
      <Title>Nome do Album</Title>
      <Description>Nome do Artista</Description>
    </Container>
  )
}
