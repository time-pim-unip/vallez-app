import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';



import Cadastro from './source/components/pages/Cadastro';
import Login from './source/components/pages/Login';
import Quartos from './source/components/pages/Quartos';



export default function App() {
  return (
    <View style={style.Logo}>

      <Image source={require('./source/components/imgs/Logo.png')} 
      style={{ width: 250, height: 100, marginTop: 40}} 
      />

      <Login />

    </View>
  );
}

const style = StyleSheet.create({
  Logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E90FF'
  }
})

/*<Image source={require('./source/components/imgs/inicial.png')} 
        style={{ width: 500, height: 800, marginTop: 50 }}
/> 

<Image source={require('./source/components/imgs/Logo.png')} 
      style={{ width: 250, height: 100, marginTop: -750}} 
>
*/



