import React, { useState, useEffect } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Img from './../imgs/suitemaster.png';

const SuiteBanner = ({locacao, navigation}) => {
    const [dataEntrada, setDataEntrada] = useState(null);
    const [dataSaida, setDataSaida] = useState(null);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);


    useEffect(()=>{

        console.log(locacao);

        if (locacao.dataEntrada != null) setDataEntrada(new Date(locacao.dataEntrada))
        if (locacao.dataSaida != null) setDataSaida(new Date(locacao.dataSaida))
        if (locacao.checkIn != null) setCheckIn(new Date(locacao.checkIn))
        if (locacao.checkOut != null) setCheckOut(new Date(locacao.checkOut))

    }, []);

    function handleAbrirLocacao(){

        navigation.navigate('Locacao', {
            locacao
        });

    }


    return (
        <TouchableOpacity 
          onPress={() => handleAbrirLocacao()}
          style={styles.buttonQuartosStyle}
          activeOpacity={0.5}>
          {/* <Image
            source={require('./../imgs/suitemaster.png')}
            style={styles.buttonImageIconStyle}
          /> */}
          {/* <Text style={styles.buttonTextStyle}>
            Suite Premium
          </Text> */}
          <Text style={styles.dateText} >Entrada prevista: { (dataEntrada) ? dataEntrada.toLocaleDateString() : '' }</Text>
          <Text style={styles.dateText} >Saida prevista: { (dataSaida) ? dataSaida.toLocaleDateString() : '' }</Text>
          <Text style={styles.dateText} >Check-in: { (checkIn) ? checkIn.toLocaleDateString() : '' }</Text>
          <Text style={styles.dateText} >Check-out: { (checkOut) ? checkOut.toLocaleDateString() : '' }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonQuartosStyle: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#0D729C',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 100,
        borderRadius: 5,
        margin: 8.5,
        padding: 10,
    
    },
        buttonImageIconStyle: {
        padding: 10,
        margin: 0,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
    },
        buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    }, dateText:{
        fontWeight: 'bold',
        color: '#fff',
        display: 'flex'
    }
});

export default SuiteBanner;