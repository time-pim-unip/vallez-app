import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native'
import { Input, Text } from 'react-native-elements'

export default function Login({ navigation }) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const entrar = () => {
        navigation.navigate('Quartos')
    }

    return (
        <View style={styles.Logo, styles.container}>
            <View>
                <Image source={require('../imgs/Logo.png')}
                    style={{ width: 250, height: 100, marginTop: -120 }} />
            </View>
                <Input placeholder placeholder='Email' style={styles.input}
                    autoFocus={false} keyboardType='email-address'
                    onChangeText={value => setEmail(value)} 
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }} 
                    leftIconContainerStyle={{ backgroundColor: '#FFF',borderColor: '#FFF', borderLeftWidth: 10, borderRightWidth: 1, }} />
                <Input placeholder='Senha' style={styles.input}
                    secureTextEntry={true}
                    onChangeText={value => setPassword(value)}
                    leftIcon={{ type: 'fontisto', name: 'key'}}
                    leftIconContainerStyle={{ backgroundColor: '#FFF', borderColor: '#FFF', borderLeftWidth: 5, borderRightWidth: 4}} />
            <TouchableOpacity onPress={() => entrar()} style={styles.buttom}>
                <Text style={styles.buttomText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                <Text style={styles.buttomText}>Cadastrar Conta</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D729C'
    },
    buttom: {
        marginTop: 40,
        padding: 10,
        backgroundColor: '#4169E1',
        borderColor: '#6495ED',
        borderWidth: 2
    },
    buttomText: {
        fontSize: 15,
        color: '#fff'
    },
    input: {
        marginTop: 0,
        width: 350,
        backgroundColor: '#FFF',
        height: 30,
        borderColor: '#333',
        padding: 5
    },
    Logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})




