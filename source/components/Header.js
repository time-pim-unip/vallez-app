import React from "react";
import {View, Text, StyleSheet } from 'react-native';

const Header = (props) => (

    <View style = {style.container}>
        <Text style={style.title}> Bem Vindo ao Vallez Hotel!!</Text>
    </View>


);

const style = StyleSheet.create({
    container:{
        marginTop: 45,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25
        
    }
});



export default Header;