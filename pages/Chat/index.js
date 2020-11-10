import React, { useState, useContext } from 'react';
import { Text } from 'react-native';

import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  Texto

} from './styles';



const Chat = () => {

  const { user } = useContext(UsuarioContext)

  return (
    <Container>
      <Texto>{user.email}</Texto>
    </Container>
  )
}

export default Chat