import React, { useState, useContext } from 'react';
import { Text, Image, ActivityIndicator } from 'react-native';

import {
  Container,
  Texto,
  CaixaLogin,
  Botao,
  BotaoTexto,
  ContainerBotoes,
  Input,
  InputTexto,
  ContainerButtons,
  Button,
  ButtonText,
  ForgotPassword,
  Logo,
  CaixaTextoChamada,
  TextoChamada,
  TextoGrupou

} from './styles';

import logoImg from '../../assets/logo.png';

import { UsuarioContext } from '../../contexts/user';

const Login = () => {

  const { signIn, signUp, resetPassword } = useContext(UsuarioContext);

  const [currentButton, setCurrentButton] = useState('aluno');
  const [email, setEmail] = useState("sousa.oliveira.yuri@gmail.com");
  const [carregando, setCarregando] = useState(false);
  const [password, setPassword] = useState("123456");

  function handleSignIn() {

    try {
      signIn(email, password)
    } catch (err) {
      console.warn(err);
    }

  }


  function handleSignUp() {

    setCarregando(true);

    try {
      signUp(email, password)
    } catch (err) {
      console.warn(err);
    } finally {
      setCarregando(false);
    }
  }

  function handleResetPassword() {

    try {
      resetPassword(email)
    } catch (err) {
      console.warn(err);
    }

  }


  return (
    <Container>

      <Logo>
        <Image source={logoImg} style={{ width: 300, height: 100 }} />
      </Logo>

      <CaixaTextoChamada>
        <TextoChamada>
          Problemas para formar
        </TextoChamada>
        <TextoChamada>
          um grupo de trabalho
        </TextoChamada>
        <TextoChamada>
          O <TextoGrupou>Grupou! </TextoGrupou>resolve!
        </TextoChamada>
      </CaixaTextoChamada>

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
        <Input
          placeholder="Digite seu email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <InputTexto>Senha</InputTexto>
        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <ForgotPassword onPress={() => { handleResetPassword() }}>
          esqueci minha senha
        </ForgotPassword>
        <ContainerButtons>
          <Button
            invert={true}
            onPress={() => { handleSignUp() }}
          >
            {carregando ?
              <ActivityIndicator color="#AE1B73" /> :
              <ButtonText invert={true}>
                Cadastre-se
              </ButtonText>
            }


          </Button>
          <Button
            onPress={() => { handleSignIn() }}
          >
            <ButtonText>Entrar</ButtonText>
          </Button>
        </ContainerButtons>


      </CaixaLogin>
    </Container>
  )
}

export default Login