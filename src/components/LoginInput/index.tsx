import React from 'react';
import { Container, InputForm } from './styles';
import { iLoginInput } from './types';


export default function LoginInput() {
  return (
    <Container>
      <InputForm placeholder="E-mail" type={'email'} />
      <InputForm placeholder="Senha" type={'password'}/>
    </Container>
  );
}
