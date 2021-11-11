import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Picker, Alert } from 'react-native'
import { Input } from 'react-native-elements'




export default function solicitacoes(navigation) {

    const [selectedValue, setSelectedValue] = useState("Serviço");

    const alert = () => {
        Alert.alert('Solicitação Confirmada Com Sucesso!')
        
    }
    
    return (
        <View style={styles.container}>
            <View>

                <View style={{ borderWidth: 1, width: 300, height: 50, backgroundColor: '#fff' }}>
                    <Picker
                        itemStyle={{ fontWeight: 'bold' }}
                        selectedValue={selectedValue}
                        style={{ height: 100, width: 300, marginTop: -25, }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >

                        <Picker.Item label="Selecione" value="" />
                        <Picker.Item label="Toalha de Rosto" value="Toalha de Rosto" />
                        <Picker.Item label="Limpeza do Quarto" value="Limpeza do Quarto" />
                        <Picker.Item label="Toalha de banho" value="Toalha de banho" />

                    </Picker>

                </View>

            </View>



            <Input placeholder='Digite a Quantidade'
                style={{ fontSize: 20 }}
                leftIconContainerStyle={{ backgroundColor: '#FFF', borderColor: '#FFF', borderLeftWidth: 1, borderRightWidth: 4, borderRadius: 20, height: 25 }}
                inputContainerStyle={{ borderRadius: 1, backgroundColor: '#fff', height: 50, marginTop: 90, borderWidth: 2}}
            
            />


            <TouchableOpacity onPress={() => alert()} style={styles.buttom}>
                <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Confirmar Solicitação</Text>
            </TouchableOpacity>


         </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
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
        marginTop: 300

    },


});