import React, { useState } from 'react';
import { Text } from 'react-native';

import {
  Container,
  Texto,
  CaixaLogin,
  Botao,
  BotaoTexto,
  ContainerBotoes,
  Input,
  InputTexto

} from './styles';

const Login = () => {

  const [currentButton, setCurrentButton] = useState('aluno');

  return (
    <Container>
      <CaixaLogin>

        <ContainerBotoes>
          <Botao onPress={() => {
            setCurrentButton('aluno')
          }}
            lastClick={currentButton == 'aluno' ? true : false}>
            <BotaoTexto
              lastClick={currentButton == 'aluno' ? true : false}>Aluno</BotaoTexto>
          </Botao>
          <Botao
            onPress={() => {
              setCurrentButton('professor')
            }}
            lastClick={currentButton == 'professor' ? true : false}>
            <BotaoTexto
              lastClick={currentButton == 'professor' ? true : false}>Professor</BotaoTexto>
          </Botao>
        </ContainerBotoes>
        <InputTexto>Email</InputTexto>
        <Input />
        <InputTexto>Senha</InputTexto>
        <Input />



      </CaixaLogin>
    </Container>
  )
}

export default Login