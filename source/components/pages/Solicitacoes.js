import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, Button, ScrollView, KeyboardAvoidingView, StyleSheet, Animated, TouchableOpacity, Picker, Alert, SafeAreaView, Platform } from 'react-native'
import { Input } from 'react-native-elements'
import Quartos from './Quartos';

import api from '../../helpers/api';

export default function solicitacoes({ navigation, route }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [servicos, setServicos] = useState([]);
    const [servicoSolicitado, setServicosSolicitados] = useState({});
    const [valor, setValor] = useState(0);
    const [quantidade, setQuantidade] = useState(0);


    useEffect(()=>{
        handleListarServicos();
    }, []);


    async function handleListarServicos(){
        const response = await api.get('/Servicos');

        const { data } = response;
        setServicos(data);

    }

    const sair = () => {
        navigation.navigate('Login')
    }

    function handleSelecionarServico(e){

        const servico = servicos.map(s => s).find(s => s.id == e);
        if (servico != null) {
            setValor(servico.valor * quantidade);
            setServicosSolicitados(servico);
            setSelectedValue(e)
        };
    }

    function handleQuantidadeServico(e){
        setQuantidade(e);
        setValor(servicoSolicitado.valor * e);
    }

    async function handleSolicitarServico(){

        if (!servicoSolicitado) {
            Alert.alert("Atenção !", "Você precisa selecionar um serviço antes de continuar !");
            return;
        }

        if (quantidade == 0) {
            Alert.alert("Atenção !", "A quantidade não pode ser igual a zero !");
            return;
        }

        const response = await api.post('/Servicos', {
            IdServico: servicoSolicitado.id,
            IdLocacao: route.params.locacao.id ,
            Quantidade: quantidade,
        }, {
            headers: {
                'Content-Type': "application/json"
            }
        });

        const { data } = response;

        Alert.alert("Sucesso !", "O serviço foi solicitado e logo um funcionário irá entrar em contato com você =D");

        setSelectedValue("");
        setServicosSolicitados(null);
        setQuantidade(0);
        setValor(null);



    }
    
    return (
        <KeyboardAvoidingView 
            behavior='position'
            style={[styles.container]}
        >
            <Text style={{width: '100%', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginVertical: 30}}> Escolha o serviço desejado </Text>
            <ScrollView style={{width: '100%', display: 'flex', direction: 'row', height: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
                <Picker
                    itemStyle={{ fontWeight: 'bold' }}
                    selectedValue={selectedValue}
                    style={{ padding: 5, borderRadius: 5, width: "90%" }}
                    onValueChange={(itemValue, itemIndex) => handleSelecionarServico(itemValue)}
                >

                    <Picker.Item label="Selecione..." value="" />
                    {(servicos.map(servico => (
                        <Picker.Item key={servico.id} label={servico.descricao} value={servico.id} />
                    )))}

                </Picker>

                <Input placeholder='Digite a Quantidade'
                    style={{ padding: 5,  display: 'flex'  }}
                    inputContainerStyle={{ backgroundColor: '#fff', borderWidth: 1,  borderRadius: 5, margin: 10 }}
                    keyboardType='numeric'
                    value={quantidade}
                    onChangeText={e => handleQuantidadeServico(e)}
                />

                { (valor) ? (<Text style={{ fontSize: 20, left: 120}}> Valor: R$ {valor} </Text>) : null }
            
                <TouchableOpacity onPress={handleSolicitarServico} style={styles.buttom}>
                    <Text style={{color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Confirmar Solicitação</Text>
                </TouchableOpacity>
            
            </ScrollView>
            
            {/* <TouchableOpacity onPress={() => sair()} style={styles.buttom2}>
                <Text style={{ color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Sair</Text>
            </TouchableOpacity> */}

         </KeyboardAvoidingView>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        width: '50%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        backgroundColor: '#4169E1',
        borderColor: '#6495ED',
        borderWidth: 2,
        justifyContent: 'center',
        margin: 20
    }

});