import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Kartica from '../components/Kartica';

const DetaljiEkran = ({route, navigation}) => {
  const {ime, naslov, vrsta} = route.params

  return (
    <View style={stil.ekran}>
      <Text style={{fontSize: 30}}>Detalji o odabranom radu:</Text>
      <Kartica>
        <Text style={stil.tekst}>Ime studenta: {ime}</Text>
        <Text style={stil.tekst}>Naslov rada: {naslov}</Text>
        <Text style={stil.tekst}>Vrsta rada: {vrsta}</Text>
      </Kartica>
      <Button title='Natrag na popis' onPress={() => navigation.push('Popis')} />
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
    fontSize: 20
  }
});

export default DetaljiEkran;
