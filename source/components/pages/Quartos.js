import React, { useState, useEffect } from "react";
import { SafeAreaView, RefreshControl, View, Text, StyleSheet, ImageBackgroundComponent, Button, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import SuiteBanner from './SuiteBanner';

import api from './../../helpers/api';

export default function Quartos({ navigation, route }) {
  const [locacoes, setLocacoes] = useState({locacoesAtivas: [], locacoesHoje: [], locacoesFuturas: []});
  const [reaload, setReload] = useState(false);


  useEffect(() => {
    getLocacoesHospede();
  }, []);

  async function getLocacoesHospede(){
    
    const { user } = route.params;
    const response = await api.get(`/Hospede/${user.id}/Locacoes`);

    const { data } = response;
    console.log(data);
    setLocacoes(data);

  }

  const handleOnRefresh = React.useCallback(() => {
    setReload(true);
    setTimeout(()=>{
      
      getLocacoesHospede();
      setReload(false);
    },1000);
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
        <Text style={{ fontWeight: 'bold', fontSize: 20, width: '100%', textAlign: 'center', marginTop: 10}}>Suas Locações </Text>
        
          {(locacoes.locacoesAtivas.length > 0) ? (
            <View>
              <Text style={styles.title}>Locações Ativas:</Text>
              <View>
                {locacoes.locacoesAtivas.map(l1 => (
                  <SuiteBanner
                    key={l1.id}
                    locacao={l1}
                    navigation={navigation}
                  />
                ))}              
              </View>
            </View>
          ) : null}

          {(locacoes.locacoesHoje.length > 0) ? (
            <View>
              <Text style={styles.title}>Locações Para Hoje:</Text>
              <View>
                {locacoes.locacoesHoje.map(l2 => (
                  <SuiteBanner
                    key={l2.id}
                    locacao={l2}
                    navigation={navigation}
                  />
                ))}              
              </View>
            </View>
          ) : null}

          {(locacoes.locacoesFuturas.length > 0) ? (
            <View>
              <Text style={styles.title}>Locações Futuras:</Text>
              <View>
                {locacoes.locacoesFuturas.map(l3 => (
                  <SuiteBanner
                    key={l3.id}
                    locacao={l3}
                    navigation={navigation}
                  />
                ))}              
              </View>
            </View>
          ) : null}

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
    fontSize: 18,
    margin: 10
  }

});




