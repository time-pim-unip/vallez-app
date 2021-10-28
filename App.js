import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


import Logo from './source/components/imgs/Logo.png';
import Header from './source/components/Header';
import Quartos from './source/components/Quartos';
import UserLogin from './source/components/user/Login';


export default function App() {
  return (
    <View >
      <Image source={require('./source/components/imgs/inicial.png')} style={{width: 420, height: 750, marginTop: 50}} />
      <Image source={require('./source/components/imgs/Logo.png')} style={{width: 427, height: 182, marginTop: -700}} />
    </View>
  );
}
