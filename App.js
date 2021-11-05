import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from './source/components/pages/Cadastro';
import Login from './source/components/pages/Login';
import Quartos from './source/components/pages/Quartos';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Quartos' component={Quartos} />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



