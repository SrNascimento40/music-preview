import React from 'react'
import { AlbumFolder, Container, Description, Title } from './styles'
import { iAlbumItem } from './types'

export default function AlbumItem({ size, title, description, imgSize }: iAlbumItem) {
  return (
    <Container size={size}>
      <AlbumFolder imgSize={imgSize} src='https://via.placeholder.com/175' />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
