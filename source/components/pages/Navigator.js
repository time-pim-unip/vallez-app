import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'


import Login from './Login'
import Quartos from './source/components/pages/Quartos'

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: 'Login '}}
})

const loginOuQuartos = createSwitchNavigator({
    Quartos: Quartos,
    Auth: authRouter
}, {
    initialRouteName: 'Quartos'

})

const Routes = {
    Quartos: {
        name: 'Quartos',
        screen: loginOuQuartos,
    }
}

export default Routes;