import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';



import Login from './source/components/pages/Login';
import Cadastro from './source/components/pages/Cadastro';
//import Quartos from './source/components/pages/Quartos';
//import UserLogin from './source/components/user/Login';


export default function App() {
  return (
    <View >


      <Image source={require('./source/components/imgs/Inicial.png')} style={{ width: 500, height: 800, marginTop: 45 }} />
      <Image source={require('./source/components/imgs/Logo.png')} style={{ width: 250, height: 100, marginTop: -780 }} />
      <Login />
      <Cadastro />

    </View>
  );
}

