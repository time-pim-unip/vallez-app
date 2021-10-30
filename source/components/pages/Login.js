import React from "react";
import {View, Text, StyleSheet,Image, Button, Alert, TextInput } from 'react-native';


const Header = (props) => (

    <View style = {style.container}>
        
        <Button
            title="Login"
            onPress={() => Alert.alert=('./source/components/pages/Quartos')}      
        />
        
    </View>


);



const style = StyleSheet.create({
    container:{

        marginTop: 60,
        justifyContent: 'center',
        
    },
    title: {

        fontSize: 25,
    }
});




export default Header;
