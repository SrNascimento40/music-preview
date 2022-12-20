import React from 'react'
import { AlbumFolder, Container, Description, Title } from './styles'
import { iAlbumItem } from './types'

export default function AlbumItem({ size, title, description, imgSize }: iAlbumItem) {
  return (
    <Container size={size}>
      <AlbumFolder imgSize={imgSize} src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Filosofem.jpg' />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
