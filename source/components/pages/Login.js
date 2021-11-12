import React, { useState } from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Animated
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
                    <Image source={require('../imgs/hotel.png')} style={{ width: 420, height: 890, marginTop: -250 }} />
                </View>
        
                <View>
                    <Image source={require('../imgs/Logo.png')}
                        style={{ width: 240, height: 100, marginTop: -700, alignItems: 'center', justifyContent: 'center' }} />
                </View>

                <View>
                    <Text style={{ marginTop: -575, fontWeight: 'bold', marginRight: 310 }}>CPF:</Text>
                </View>

                <Input placeholder='Digite seu CPF'
                    style={{ fontSize: 14 }}
                    autoFocus={false} keyboardType='email-address'
                    onChangeText={value => setEmail(value)}
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    leftIconContainerStyle={{ backgroundColor: '#FFF', borderColor: '#FFF', borderLeftWidth: 15, borderRightWidth: 1, borderRadius: 20, height: 25 }}
                    inputContainerStyle={{ borderRadius: 20, backgroundColor: '#fff', height: 40, marginTop: -550 }}
                />
                <View>

                    <Text style={{ marginTop: -502, fontWeight: 'bold', marginRight: 300 }}>Senha:</Text>

                </View>

                <Input placeholder='Digite sua senha'
                    style={{ fontSize: 14 }}
                    secureTextEntry={true}
                    onChangeText={value => setPassword(value)}
                    leftIcon={{ type: 'fontisto', name: 'key' }}
                    leftIconContainerStyle={{ backgroundColor: '#FFF', borderColor: '#FFF', borderLeftWidth: 13, borderRightWidth: 4, borderRadius: 20, height: 25 }}
                    inputContainerStyle={{ borderRadius: 20, backgroundColor: '#fff', height: 40, marginTop: -480 }}
                />
                <TouchableOpacity onPress={() => entrar()} style={styles.buttom}>
                    <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Login</Text>

                </TouchableOpacity>
            </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

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
        marginTop: -400
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




