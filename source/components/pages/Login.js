import React, { useState } from 'react'
import {
    SafeAreaView,
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
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={require('../imgs/Logo.png')}
                    style={{ width: 240, height: 100, marginTop: -130 }} />
            </View>
            <Text style={styles.text}>CPF:</Text>
            <Input placeholder='Digite seu CPF'
                style={{ fontSize: 14 }}
                autoFocus={false} keyboardType='email-address'
                onChangeText={value => setEmail(value)}
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                leftIconContainerStyle={{ backgroundColor: '#FFF', borderColor: '#FFF', borderLeftWidth: 15, borderRightWidth: 1, borderRadius: 20, height: 25 }}
                inputContainerStyle={{ borderRadius: 20, backgroundColor: '#fff', height: 40 }}
            />
            <Text style={styles.text}>Senha:</Text>
            <Input placeholder='Digite sua senha'
                style={{ fontSize: 14 }}
                secureTextEntry={true}
                onChangeText={value => setPassword(value)}
                leftIcon={{ type: 'fontisto', name: 'key' }}
                leftIconContainerStyle={{ backgroundColor: '#FFF', borderColor: '#FFF', borderLeftWidth: 13, borderRightWidth: 4, borderRadius: 20, height: 25 }}
                inputContainerStyle={{ borderRadius: 20, backgroundColor: '#fff', height: 40 }}
            />
            <TouchableOpacity onPress={() => entrar()} style={styles.buttom}>
                <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => { }} style={styles.buttom}>
                <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Cadastrar Conta</Text>
            </TouchableOpacity>
        </SafeAreaView>

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
        width: '95%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        backgroundColor: '#4169E1',
        borderColor: '#6495ED',
        borderWidth: 2,
        justifyContent: 'center',
        margin: 10
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        height: 30,
        borderColor: '#333',
    },
    text: {
        right: 170,
        margin: 4,
        fontWeight: 'bold',
        color: '#fff',
    }
})




