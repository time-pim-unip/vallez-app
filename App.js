import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Cadastro from './source/components/pages/Cadastro';
import Login from './source/components/pages/Login';
import Quartos from './source/components/pages/Quartos';
import SuitePremium from './source/components/pages/SuitePremium/index';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator()

function drawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Quartos' component={Quartos} />
      <Drawer.Screen name='Sair' component={Login} options={{headerShown: false}}  />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Quartos' component={drawer} options={{ headerShown: false}} />
        <Stack.Screen name='SuitePremium' component={SuitePremium} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}







