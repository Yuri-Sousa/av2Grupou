import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#ffffff;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: flex-end;
  align-items:center;
`;


export const Texto = styled.Text`
 color:#fff;
 font-size:20px;
 text-align:center;

`

export const ContainerMessages = styled.ScrollView`
  width:100%;
  flex:1;
`;

export const ContainerMessage = styled.View`
  width:100%;
  margin-bottom: 10px;
`;

export const HoraMensagem = styled.Text`
 color:#b2b8d0;
 font-size:14px;
 text-align:right;
 padding-top:5px;
 padding-bottom:5px;
 margin-right: ${props => props.messageUser ? "5px" : "65px"};
 font-weight:bold;
`

export const Message = styled.Text`
 color:#fff;
 font-size:14px;
 border-radius: 10px;
 padding-top:20px;
 padding-bottom:20px;
 padding-left: ${props => props.messageUser ? "20px" : "20px"};
 padding-right: ${props => props.messageUser ? "15px" : "60px"};
 margin-left: ${props => props.messageUser ? "60px" : "0px"};
 margin-right: ${props => props.messageUser ? "0px" : "60px"};
 margin-top:5px;
 background-color: ${props => props.messageUser ? "#259cd7" : "#b2b8d0"};
`

export const ContainerButtons = styled.View`
  flex-direction:row;
  background-color:#f0f1f5;
  width:110%;
  height:80px;
  padding-left:15px;
  padding-right:15px;
  align-items:center;
`

export const Button = styled.TouchableOpacity`
  flex:1;
  width:100%;
  height: 60px;
  background-color:#ae1b73;
  border:1px solid #ae1b73;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-bottom:10px;
`

export const ButtonText = styled.Text`
  color:#ffff;
  font-size:16px;
  font-weight:bold;
  `

export const Input = styled.TextInput`
  border:1px solid #cbcede;
  height:60px;
  flex:3;
  border-radius:5px;
  padding: 0 20px;
  background-color:#ffffff;
  margin-right:10px;
`