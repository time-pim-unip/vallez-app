import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';

import Login from './source/components/pages/Login';
import Quartos from './source/components/pages/Quartos';
import Faturamentos from './source/components/pages/Faturamentos';
import Locacao from './source/components/pages/Locacao';
import Solicitacoes from './source/components/pages/Solicitacoes';
import { UserProvider } from './source/Context/UserContext';

const Drawer = createDrawerNavigator()

function drawer({ route }) { 
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Quartos'  component={Quartos} initialParams={route.params} />
      <Drawer.Screen name='Faturamento'  component={Faturamentos} initialParams={route.params} />
      <Drawer.Screen name='Sair' component={Login} options={{headerShown: false}} />
    </Drawer.Navigator>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false}} />
          <Stack.Screen name='Quartos' component={drawer} options={{ headerShown: false }} />
          <Stack.Screen name='Locacao' component={Locacao}  />
          <Stack.Screen name='Solicitações' component={Solicitacoes} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </UserProvider>

  )
}







