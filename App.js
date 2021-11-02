import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Cadastro from './source/components/pages/Cadastro';
import Login from './source/components/pages/Login';
import Quartos from './source/components/pages/Quartos';


const Stack = createNativeStackNavigator();


function HomeScreen() {
  return (
    <View style={style.Logo}>

      <Image source={require('./source/components/imgs/Logo.png')}
        style={{ width: 250, height: 100, marginTop: 40 }}
      />
    
    <Login />
    
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  Logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D729C'
  }
})

/*<Image source={require('./source/components/imgs/inicial.png')}
        style={{ width: 500, height: 800, marginTop: 50 }}
/>

<Image source={require('./source/components/imgs/Logo.png')}
      style={{ width: 250, height: 100, marginTop: -750}}
>
*/



