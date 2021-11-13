import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackgroundComponent, Button, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import SuiteBanner from './SuiteBanner';

import api from './../../helpers/api';

export default function Quartos({ navigation, route }) {
  const [locacoes, setLocacoes] = useState({locacoesAtivas: [], locacoesHoje: [], locacoesFuturas: []});

  useEffect(() => {
    getLocacoesHospede();
  }, []);

  async function getLocacoesHospede(){
    
    const { user } = route.params;
    const response = await api.get(`/Hospede/${user.id}/Locacoes`);

    const { data } = response;
    setLocacoes(data);

  }

  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      {/* <Text style={{ marginLeft: -30, fontWeight: 'bold', fontSize: 20}}>Suas Locações Ativas: </Text> */}
      
        {(locacoes.locacoesAtivas.length > 0) ? (
          <View>
            <Text style={styles.title}>Suas locações ativas:</Text>
            <View>
              {locacoes.locacoesAtivas.map(locacao => (
                <SuiteBanner
                  key={locacao.id}
                  locacao={locacao}
                  navigation={navigation}
                />
              ))}              
            </View>
          </View>
        ) : null}

        {(locacoes.locacoesHoje.length > 0) ? (
          <View>
            <Text style={styles.title}>Suas locações para hoje:</Text>
            <View>
              {locacoes.locacoesAtivas.map(locacao => (
                <SuiteBanner
                  locacao={locacao}
                />
              ))}              
            </View>
          </View>
        ) : null}

        {(locacoes.locacoesFuturas.length > 0) ? (
          <View>
            <Text style={styles.title}>Suas locações futuras:</Text>
            <View>
              {locacoes.locacoesAtivas.map(locacao => (
                <SuiteBanner
                  locacao={locacao}
                />
              ))}              
            </View>
          </View>
        ) : null}

      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    //marginTop: -10,
    // padding: 30,
  },
  buttonQuartosStyle: {
  
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D729C',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 5,
    margin: 8.5,
    marginLeft: -30
    
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
    fontSize: '18px',
    margin: 10
  }

});




