import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './source/components/pages/Login';
import Quartos from './source/components/pages/Quartos';
<<<<<<< HEAD
import SuitePremium from './source/components/pages/SuitePremium/suitepremium';
import SuiteMaster from './source/components/pages/SuiteMaster/suitemaster';
import SuiteMaster2 from './source/components/pages/SuiteMaster/suitemaster2';
import SuiteCasal from './source/components/pages/CasalSuite/index';
import Quartosolteiro from './source/components/pages/Solteiro/Quartosolteito';
import Solicitacoes from './source/components/pages/Solicitacoes';
=======
import SuitePremium from './source/components/pages/SuitePremium/index';
>>>>>>> 518876187ceaee3d631531f810d2940cc18bbaae

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator()

function drawer() {
  return (
<<<<<<< HEAD
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
=======
    <Drawer.Navigator>
      <Drawer.Screen name='Quartos' component={Quartos} />
      <Drawer.Screen name='Sair' component={Login} options={{headerShown: false}}  />
    </Drawer.Navigator>
>>>>>>> 518876187ceaee3d631531f810d2940cc18bbaae
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







