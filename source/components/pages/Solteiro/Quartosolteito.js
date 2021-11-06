import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'



export default function Quartosolteiro() {
    return (
        <View >
            <View style={styles.container}>
                <Image source={require('../../imgs/hotel-cama.png')}
                style={{ width: 500, height: 290, marginTop: 300 }} />
            </View>
            <Text style={styles.text}> 
                Informações
            </Text>
            <Text style={styles.informacao}>
                Pegar no Desktop
            </Text>
            <TouchableOpacity style={styles.buttom}>
                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Solicitar Serviços</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    text: {
        right: -165,
        marginTop: 300,
        fontWeight: 'bold',
        color: 'black',
    },
    informacao:{
        right: -10,
        marginTop: 10,
        color: 'black',

    },
    buttom: {
        right: -20,
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#4169E1',
        borderColor: '#6495ED',
        borderWidth: 2,
        justifyContent: 'center',
        marginTop: 95
    },
})