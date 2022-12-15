import React from 'react'
import { Container, Image } from './styles'
import logo from '../../assets/images/spotify.png'

export default function Header() {
  return (
    <Container>
      <Image src={logo} alt="Spotify logo" />
    </Container>
  )
}
