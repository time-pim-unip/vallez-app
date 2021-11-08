import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'



export default function solicitacoes() {
    return (
        <View style={styles.container}>
            <Image source={require('/app/vallez-app/source/components/imgs/hotel.png')}
            style={{ width: 500, height: 10, marginLeft: 50, marginTop: 0, flex: 1}} />



            <Text style={styles.text}>Hello</Text>
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
        fontSize: 50,
        right: 10,
        marginTop: 0,
        marginLeft: 50,
        fontWeight: 'bold',
        color: 'black',
    }
});