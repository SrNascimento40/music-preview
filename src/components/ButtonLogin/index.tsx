import React from 'react'
import { Container, GenericButton } from './styles'
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URL, RESPONSE_TYPE } from '../../api/api'

export default function ButtonLogin() {
  return (
    <Container>
      <GenericButton href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}>Login com Spotify</GenericButton>
    </Container>
  )
}
