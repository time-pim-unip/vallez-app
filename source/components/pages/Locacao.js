import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import api from '../../helpers/api';


export default function Locacao({ route }) {
    const [bloco, setBloco] = useState();
    const [numero, setNumero] = useState();
    const [dataEntrada, setDataEntrada] = useState(null);
    const [dataSaida, setDataSaida] = useState(null);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);

    useEffect(()=>{
        
        handleBuscarQuartoLocado();

    }, []);

    async function handleBuscarQuartoLocado(){
        const { locacao } = route.params;
        
        const response = await api.get("/Locacao/"+locacao.id);
        const { data } = response;

        setBloco(data.bloco);
        setNumero(data.numero);

        if (locacao.dataEntrada != null) setDataEntrada(new Date(locacao.dataEntrada));
        if (locacao.dataSaida != null) setDataSaida(new Date(locacao.dataEntrada));
        if (locacao.checkIn != null) setCheckIn(new Date(locacao.checkIn));
        if (locacao.checkOut != null) setCheckOut(new Date(locacao.checkOut));

    }

    return (
        <View style={{ display: 'flex', justifyContent: 'space-between', height: '100%'}} >
            <View style={styles.container}>
                <Image source={require('../imgs/hotel-cama.png')}
                style={{ width: 500, height: 290, marginBottom: 10 }} />

                <Text>
                    <Text style={styles.text} > Bloco: </Text> { bloco }
                </Text>

                <Text>
                    <Text style={styles.text} > Numero: </Text> { numero }
                </Text>

                <Text>
                    <Text style={styles.text} > Data Entrada: </Text> { (dataEntrada) ? dataEntrada.toLocaleDateString() : '' }
                </Text>

                <Text>
                    <Text style={styles.text} > Data Saida: </Text> { (dataSaida) ? dataEntrada.toLocaleDateString() : '' }
                </Text>

                <Text>
                    <Text style={styles.text} > Check-in: </Text> { (checkIn) ? checkIn.toLocaleDateString() : '' }
                </Text>

                <Text>
                    <Text style={styles.text} > Check-out: </Text> { (checkOut) ? checkOut.toLocaleDateString() : '' }
                </Text>

            </View>
            <View style={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <TouchableOpacity style={styles.buttom}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Solicitar Serviços</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
    },
    informacao:{
        marginTop: 10,
        color: 'black',
    },
    buttom: {
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#4169E1',
        borderColor: '#6495ED',
        borderWidth: 2,
        justifyContent: 'center',
    },
})