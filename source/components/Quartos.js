import React from "react";
import {View, Text, StyleSheet } from 'react-native';

const Quartos = (props) => (

    <View style = {style.container}>
        
        <Text style={style.title}> Suite Casal</Text>
        <Text style={style.title}> Suite Solteiro</Text>
        <Text style={style.title}> Suite Solteiro</Text>
        <Text style={style.title}> Suite Solteiro duas Camas</Text>
        <Text style={style.title}> Suite Casal com uma cama de Solteiro</Text>


    </View>


);

const style = StyleSheet.create({
    container:{
        marginTop: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20
        
    }
});

export default Quartos;