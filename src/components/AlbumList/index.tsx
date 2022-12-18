import React from 'react'
import AlbumItem from '../AlbumItem'
import { Container, Subtitle, Wrapper } from './styles'
import { iAlbumList } from './types'

export default function AlbumList({ title = 'Álbuns buscados recentemente', ...props }:iAlbumList) {
  return (
    <Container>
      <Subtitle>{ title }</Subtitle>
      <Wrapper>
        <AlbumItem size="medium" title="Filosofem" description='Burzum' imgSize='medium'/>
        <AlbumItem size="medium" title="Filosofem" description='Burzum' imgSize='medium'/>
        <AlbumItem size="medium" title="Filosofem" description='Burzum' imgSize='medium'/>
        <AlbumItem size="medium" title="Filosofem" description='Burzum' imgSize='medium'/>
        <AlbumItem size="medium" title="Filosofem" description='Burzum' imgSize='medium'/>
        <AlbumItem size="medium" title="Filosofem" description='Burzum' imgSize='medium'/>
        <AlbumItem size="medium" title="Filosofem" description='Burzum' imgSize='medium'/>
        <AlbumItem size="medium" title="Filosofem" description='Burzum' imgSize='medium'/>
      </Wrapper>
    </Container>
  )
}
