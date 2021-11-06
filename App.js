import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './source/components/pages/Login';
import Quartos from './source/components/pages/Quartos';
import SuitePremium from './source/components/pages/SuitePremium/suitepremium';
import SuiteMaster from './source/components/pages/SuiteMaster/suitemaster';
import SuiteMaster2 from './source/components/pages/SuiteMaster/suitemaster2';
import SuiteCasal from './source/components/pages/CasalSuite/index';
import Quartosolteiro from './source/components/pages/Solteiro/Quartosolteito';
import Solicitacoes from './source/components/pages/Solicitacoes';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Quartos' component={Quartos} />
        <Stack.Screen name='SuitePremium' component={SuitePremium} />
        <Stack.Screen name='SuiteMaster' component={SuiteMaster} />
        <Stack.Screen name='SuiteMaster2' component={SuiteMaster2} />
        <Stack.Screen name='SuiteCasal' component={SuiteCasal} />
        <Stack.Screen name='Quartosolteiro' component={Quartosolteiro} />
        <Stack.Screen name='Solicitacoes' component={Solicitacoes} />
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



