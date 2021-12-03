import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
 
const Tipka = (props) => {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={stil.tipka}>
        <Text style={stil.tekst}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
 
const stil = StyleSheet.create({
    tipka: {
        backgroundColor: '#6495ed',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      tekst:{
        color: 'white',
        fontSize: 18
      }
})
 
export default Tipka;