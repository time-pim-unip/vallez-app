import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'


import Quartos from './Quartos'


class Login extends Component {
    state= {
        email: '',
        password: ''
    }

     login = ({ navigation }) => {
        navigation.navigate(Quartos)
    } 

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder placeholder='Email' style={styles.input}
                    autoFocus={false} keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState( { email})} />
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={this.login} style={styles.buttom }>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Cadastrar Conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4169E1'
    },
    buttomText: {
        fontSize: 20,
        color: '#000'
    },
    input: {
        marginTop: 20,
        width: 350,
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
})

export default Login


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}