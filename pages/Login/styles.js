import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#AB1B71;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: flex-end;
  align-items:center;
`;

export const CaixaLogin = styled.View`
  height:52%;
  width:100%;
  background-color:#fff;
  border-top-right-radius:25px;
  border-top-left-radius:25px;
  padding:20px;
`;


export const ContainerBotoes = styled.View`
 flex-direction:row;

`;
export const Botao = styled.TouchableOpacity`
  border-bottom-width:4px;
  border-bottom-color:${props => props.lastClick ? "#AE1B73" : "#fff"};
  height:60px;
  margin: 0px 5px;
  flex:1;
  justify-content:center;
  align-items:center;

`
export const BotaoTexto = styled.Text`
  font-size:20px;
  color:${props => props.lastClick ? "#673f66" : "#ccc"};
`



export const Input = styled.TextInput`
  border:1px solid #ccc;
  height:65px;
  margin-top:5px;
  border-radius:5px;
  padding: 0 20px;
`
export const InputTexto = styled.Text`
  margin-top:20px;
  color:#b4b8c6;
  
`