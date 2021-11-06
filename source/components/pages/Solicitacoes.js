import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'



export default function solicitacoes() {
    return (
        <View style={styles.container}>
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
        right: 0,
        marginTop: 0,
        fontWeight: 'bold',
        color: 'black',
    }
});