import React, {useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackgroundComponent, Button, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


export default function Quartos({ navigation }) {
  
  const suitepremium = () => {
    navigation.navigate('SuitePremium')
  }

  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Text style={{ marginLeft: -30, fontWeight: 'bold', fontSize: 20}}>Escolha seu Quarto:</Text>
      <TouchableOpacity 
          onPress={() => suitepremium()}
          style={styles.buttonQuartosStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imgs/suitepremium.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>
            Suite Premium
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.buttonQuartosStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imgs/suitemaster.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>
            Suite Master 
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.buttonQuartosStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imgs/vaivai.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>
            Suite Master 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuartosStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imgs/suitemaster3.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>
            Suite Master 3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonQuartosStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imgs/casalsuite.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>
            Suite Casal 
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.buttonQuartosStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imgs/quartocasal.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>
            Suite Casal Simples
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonQuartosStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../imgs/vai.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>
            Quarto Solteiro
          </Text>
        </TouchableOpacity>

        
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: -10,
    padding: 30,
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

});




