import React, { createContext, useState, useEffect } from 'react';

import firebase from 'firebase';
import 'firebase/auth';

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const ListenAuth = (userState) => {
    setUser(userState)
  }


  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(ListenAuth);
    return listener;
  }, [])


  const signIn = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        // console.warn(resp)
      })
      .catch(err => {
        console.warn(err)
      })
  }

  const signUp = (email, password) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp => {
        console.warn(resp)
      })
      .catch(err => {
        console.warn(err)
      })
  }

  const signOut = () => {
    firebase.auth().signOut()
      .then(resp => {
        console.warn('Usuario Deslogado com sucesso!')
      })
      .catch(err => {
        console.warn(err)
      })
  }

  return (
    <UsuarioContext.Provider value={{ user, signIn, signOut, signUp }}>
      {children}
    </UsuarioContext.Provider>
  )
}


export { UsuarioContext, UsuarioProvider }