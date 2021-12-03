import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Tipka from '../components/Tipka';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PocetniEkran = ({navigation}) => {
  return (
    <View style={stil.ekran}>
      <Text style={stil.tekst}>ZAVRŠNI I DIPLOMSKI RADOVI</Text>
      <MaterialCommunityIcons name="bookshelf" size={250} color="black" />
      <Tipka title="Popis radova" onPress={() => navigation.navigate("Popis")} />
      <Tipka title="Unos novog zapisa" onPress={() => navigation.navigate("Unos")} />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tekst: {
    fontSize: 25,
    color: '#6495ed'
  }
});

export default PocetniEkran;