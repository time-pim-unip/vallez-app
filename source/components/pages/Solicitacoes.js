import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Picker, Alert } from 'react-native'
import { Input } from 'react-native-elements'
import Quartos from './Quartos';




export default function solicitacoes({ navigation }) {

    const [selectedValue, setSelectedValue] = useState("Serviço");

    const alert = () => {
        Alert.alert('Solicitação Confirmada Com Sucesso!', 'ok', [
            {
                text: 'Ok'
            },
        ])
        
    }

    const sair = () => {
        navigation.navigate('Login')


    }
    
    return (
        <View style={styles.container}>
            <View>


                <View style={{ borderWidth: 2, width: 300, height: 50, backgroundColor: '#fff', left: 10, borderRadius: 15, marginTop: 170 }}>
                    <Picker
                        itemStyle={{ fontWeight: 'bold' }}
                        selectedValue={selectedValue}
                        style={{ height: 100, width: 305, marginTop: -25, }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >

                        <Picker.Item label="Selecione" value="" />
                        <Picker.Item label="Toalha de Rosto" value="Toalha de Rosto" />
                        <Picker.Item label="Limpeza do Quarto" value="Limpeza do Quarto" />
                        <Picker.Item label="Toalha de banho" value="Toalha de banho" />

                    </Picker>

                </View>

                <Input placeholder='Digite a Quantidade'
                    style={{ fontSize: 20, padding: 10 }}
                    inputContainerStyle={{ borderRadius: 2, backgroundColor: '#fff', height: 50, marginTop: 40, borderWidth: 2, width: 305, borderRadius: 15 }}
                    keyboardType='numeric'
                />

                <Text style={{ fontSize: 20, left: 120}}> Valor : </Text>

                <Text style={{ fontSize: 20, }}> R$: 500,00</Text>


            </View>

            <View>
                <Image source={require('../imgs/Logo.png')}
                    style={{width:245, height:100, marginTop: -400 }}
                />
            </View>




            <TouchableOpacity onPress={() => alert()} style={styles.buttom}>
                <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Confirmar Solicitação</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => sair()} style={styles.buttom2}>
                <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Sair</Text>
            </TouchableOpacity>

         </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#40E0D0',
    },
    text: {
        fontSize: 50,
        right: 10,
        marginTop: 0,
        marginLeft: 50,
        fontWeight: 'bold',
        color: 'black',
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        height: 30,
        borderColor: '#333',
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
        marginTop: 50
    },
    buttom2: {
        width: '95%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        backgroundColor: 'red',
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        marginTop: 50
    }

});