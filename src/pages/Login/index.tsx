import React from 'react';
import { Container, InfoText } from './styles';
import ButtonLogin from '../../components/ButtonLogin';


export default function Login() {

  return (
    <Container>
      {/* <LoginInput /> */}
      <InfoText> Faça login com sua conta Spotify para acessar os recursos do nosso site!</InfoText>
      <ButtonLogin />
    </Container>
  );
}
