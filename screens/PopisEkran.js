import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Tipka from '../components/Tipka'

import { RADOVI } from '../data/test-podaci';

const PopisEkran = ({navigation}) => {
  const prikazElelementa = (podaci) => {
    return (
        <Tipka 
          title={podaci.item.naslov} 
          onPress={() => navigation.navigate('Detalji', {
            ime: podaci.item.student,
            naslov: podaci.item.naslov,
            vrsta: podaci.item.vrsta
          })} />
    );
  };
  return (
    <View style={stil.ekran}>
      <Text style={stil.tekst}>Radovi spremljeni u repozitorij:</Text>
      <FlatList data={RADOVI} renderItem={prikazElelementa} />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popisElement: {
    padding: 20,
    marginHorizontal: 10,
    marginVertical:15,
    borderColor: "black",
    borderWidth: 1,
  }, 
  tekst: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30
  }
});

export default PopisEkran;
