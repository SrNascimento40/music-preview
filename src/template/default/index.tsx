import React from 'react'
import { Container } from './styles'
import { iDefault } from './types'

export default function Default({children}: iDefault) {
  return (
    <Container>
      {children}
    </Container>
  )
}
