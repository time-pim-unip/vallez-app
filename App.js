import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './source/components/pages/Login';
import Quartos from './source/components/pages/Quartos';
import SuitePremium from './source/components/pages/SuitePremium/suitepremium';
import SuiteMaster from './source/components/pages/SuiteMaster/suitemaster';
import SuiteMaster2 from './source/components/pages/SuiteMaster/suitemaster2';
import SuiteCasal from './source/components/pages/CasalSuite/CasalSuite';
import Quartosolteiro from './source/components/pages/Solteiro/Quartosolteito';
import Solicitacoes from './source/components/pages/Solicitacoes';
import solicitacoes from './source/components/pages/Solicitacoes';

const Drawer = createDrawerNavigator()

function drawer() { 
  return (
      
    <Drawer.Navigator>
      <Drawer.Screen name='Quartos' component={Quartos} />
      <Drawer.Screen name='Solicitações' component={Solicitacoes} />
      <Drawer.Screen name='Sair' component={Login} options={{headerShown: false}} />
    </Drawer.Navigator>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false}} />
        <Stack.Screen name='Quartos' component={drawer} options={{ headerShown: false }} />
        <Stack.Screen name='SuitePremium' component={SuitePremium} />
        <Stack.Screen name='SuiteMaster' component={SuiteMaster} />
        <Stack.Screen name='SuiteMaster2' component={SuiteMaster2} />
        <Stack.Screen name='SuiteCasal' component={SuiteCasal} />
        <Stack.Screen name='Quartosolteiro' component={Quartosolteiro} />
        <Stack.Screen name='Solicitações' component={solicitacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}







