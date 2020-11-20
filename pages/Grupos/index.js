import React, { useState, useContext, useEffect } from 'react';
import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  Button,
  ButtonText,
  ContainerMessages
} from './styles';

const openGroup = (nomeGrupo,navigation) => {

  navigation.navigate("Chat",{grupo: nomeGrupo})

}

const Grupos = ( { navigation } ) => {

  return (
    <Container>
      
      <ContainerMessages>
        
        <Button onPress={() => { openGroup('grupo1',navigation) }}>
          <ButtonText  >
            Grupo 1
          </ButtonText>
        </Button>
        
        <Button onPress={() => { openGroup('grupo2',navigation) }}>
          <ButtonText>
            Grupo 2
          </ButtonText>
        </Button>

        <Button onPress={() => { openGroup('grupo3',navigation) }}>
          <ButtonText>
            Grupo 3
          </ButtonText>
        </Button>

      </ContainerMessages>

    </Container>
  )
}

export default Grupos