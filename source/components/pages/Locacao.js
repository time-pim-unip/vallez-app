import React, { useState, useEffect } from 'react'
import { Dimensions, View, Text, Image, StyleSheet, TouchableOpacity, RefreshControl, SafeAreaView, ScrollView } from 'react-native'

import api from '../../helpers/api';


export default function Locacao({ route, navigation }) {
    const [bloco, setBloco] = useState();
    const [numero, setNumero] = useState();
    const [dataEntrada, setDataEntrada] = useState("");
    const [dataSaida, setDataSaida] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const [quarto, setQuarto] = useState({});
    const [locacao, setLocacao] = useState({});
    const [servicosSolicitados, setServicosSolicitados] = useState([]);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    
    const [reload, setReload] = useState(false);

    useEffect(()=>{
        
        handleBuscarQuartoLocado();

    }, []);

    const handleOnRefresh = React.useCallback(() => {
        setReload(true);
        setTimeout(()=>{
          
            handleBuscarQuartoLocado();
          setReload(false);
        },1000);
      }, []);

    async function handleBuscarQuartoLocado(){

        const { locacao } = route.params;
        
        const response = await api.get("/Locacao/"+locacao.id);
        const { quarto, servicosSolicitados } = response.data;
        
        setQuarto(quarto);
        setServicosSolicitados(servicosSolicitados);
        setLocacao(response.data.locacao);
        

        setBloco(quarto.bloco);
        setNumero(quarto.numero);

        if (locacao.dataEntrada != null) setDataEntrada(new Date(locacao.dataEntrada));
        if (locacao.dataSaida != null) setDataSaida(new Date(locacao.dataEntrada));
        if (locacao.checkIn != null) setCheckIn(new Date(locacao.checkIn));
        if (locacao.checkOut != null) setCheckOut(new Date(locacao.checkOut));


    }

    function handleRedirecionar(){
        
        const { locacao } = route.params;
        navigation.navigate('Solicitações', {
            locacao
        });
    }


    return (
        <SafeAreaView style={{ display: 'flex'}} >
            <ScrollView style={styles.container} 
                refreshControl={
                    <RefreshControl 
                        refreshing={reload}
                        onRefresh={handleOnRefresh}
                    />
                }
            >
                <View style={{ width: width, display: 'flex', alignItems: 'center' }}> 
                    <Image source={require('../imgs/hotel-cama.png')}
                    style={{ resizeMode: 'contain', width: width, height: 150, marginBottom: 10 }} />
                </View>
                <View style={{ display: 'flex', flexGrow: 1, width: width, height: height, paddingHorizontal: 5 }} >

                    <Text>
                        <Text style={styles.text} > Bloco: </Text> <Text> { bloco } </Text>
                    </Text>

                    <Text>
                        <Text style={styles.text} > Quarto: </Text> <Text> { numero } </Text>
                    </Text>

                    <Text>
                        <Text style={styles.text} > Data Entrada: </Text> <Text> { (dataEntrada) ? dataEntrada.toLocaleDateString() : '' } </Text>
                    </Text>

                    <Text>
                        <Text style={styles.text} > Data Saida: </Text> <Text> { (dataSaida) ? dataEntrada.toLocaleDateString() : '' } </Text>
                    </Text>

                    <Text>
                        <Text style={styles.text} > Check-in: </Text> <Text> { (checkIn) ? checkIn.toLocaleDateString() : '' } </Text>
                    </Text>

                    <Text>
                        <Text style={styles.text} > Check-out: </Text> <Text> { (checkOut) ? checkOut.toLocaleDateString() : '' } </Text>
                    </Text>

                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 22, width: '100%', textAlign: 'center', marginVertical: 10}}> Serviços Solicitados </Text>
                        <View style={{ paddingHorizontal: 30 }}> 
                            
                            {(servicosSolicitados.map(ss => (
                                <View style={{ padding: 10, marginBottom: 10, backgroundColor: '#dbdbdb', borderRadius: 5, display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                    <Text style={{fontSize: 18}} ><Text> { ss.qtdeSolicitado } </Text> <Text style={{ color: '#1f1f1f' }}> { ss.servico.descricao }</Text> <Text style={{fontWeight: 'bold'}}> R$ { ss.qtdeSolicitado * ss.servico.valor } </Text></Text>
                                </View>
                            )))}

                        </View>
                    </View>
                </View>
            </ScrollView>
                <View style={{position: 'absolute', bottom: 30, width: width, paddingVertical: 10,  display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    {(locacao.checkIn != null) ? (
                        <TouchableOpacity style={styles.buttom} onPress={handleRedirecionar}>
                            <Text  style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Solicitar Serviços</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.buttomCancel} onPress={handleRedirecionar}>
                            <Text  style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Cancelar Hospedagem</Text>
                        </TouchableOpacity>
                    )}
                    
                </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%'
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
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
    },buttomCancel: {
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#ff5959',
        borderColor: '#fa3737',
        borderWidth: 2,
        justifyContent: 'center',
    },
})