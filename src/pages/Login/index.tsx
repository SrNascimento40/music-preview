import React from 'react';
import { Container } from './styles';
import LoginInput from '../../components/LoginInput';
import Button from '../../components/Button';


export default function Login() {

  return (
    <Container>
      <LoginInput />
      <Button />
    </Container>
  );
}
