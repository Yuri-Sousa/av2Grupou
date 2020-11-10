import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './routes';

import { UsuarioProvider } from './contexts/user'

import './services/firebase';

export default function App() {
  return (
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
