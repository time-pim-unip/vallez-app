import React, { useState, useEffect } from "react";
import { SafeAreaView, RefreshControl, View, Text, StyleSheet, ImageBackgroundComponent, Button, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import SuiteBanner from './SuiteBanner';

import api from '../../helpers/api';
import { useUser } from './../../Context/UserContext';

export default function Faturamentos({ navigation, route }) {
  const [faturamentos, setFaturamentos] = useState([]);
  const [reaload, setReload] = useState(false);
  const { user } = useUser();


  useEffect(() => {
    getFaturamentosHospede();
  }, []);

  async function getFaturamentosHospede(){

    //const { user } = route.params;
    const response = await api.get(`/Faturamento/${user.id}`);

    const { data } = response;
    const faturamento = data.map(fat => {

      const last = new Date(fat.createdAt);
      return {...fat, last};
      
    });

    setFaturamentos(faturamento);

  }

  const handleOnRefresh = React.useCallback(() => {
    setReload(true);
    setTimeout(()=>{
      
      getFaturamentosHospede();
      setReload(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView 
        refreshControl={
          <RefreshControl
            refreshing={reaload}
            onRefresh={handleOnRefresh}
          />
        }
      >
        <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, width: '100%', textAlign: 'center', marginTop: 10}}>Seus Faturamentos</Text>
        
          <View>
            <View>
              {faturamentos.map(f => (
                  <TouchableOpacity 
                    key={f.id}
                    //onPress={() => handleAbrirLocacao()}
                    style={styles.buttonFatuarmentoStyle}
                    activeOpacity={0.5}>
                      <Text style={styles.boxText}>Numero Locacao: {(f.idLocacao) ? f.idLocacao : ''} </Text>
                      <Text style={styles.boxText}>Data saida: {(f.last) ? f.last.toLocaleDateString() : ''}</Text>
                      <Text style={styles.boxText}>Valor: R$ {(f.valor) ? f.valor : ''}</Text>
                  </TouchableOpacity>
                ))}              
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    //marginTop: -10,
    // padding: 30,
  },
  buttonFatuarmentoStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#ff2e2e',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 5,
    margin: 8.5,
    padding: 10,

  },
  boxText:{
    color: '#fff',
    fontWeight: 'bold'
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
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10
  }

});




