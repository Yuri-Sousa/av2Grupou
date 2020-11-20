import React, { useState, useContext } from 'react';
import { Text } from 'react-native';

import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  Texto,
  ContainerButtons,
  Button,
  ButtonText
} from './styles';



const Settings = () => {

  const { signOut } = useContext(UsuarioContext)

  return (
    <Container>
      <ContainerButtons>
        <Button invert={true}
          onPress={() => { signOut() }}
        >
          <ButtonText invert={true}>Sair</ButtonText>
        </Button>
      </ContainerButtons>

    </Container>
  )
}

export default Settings