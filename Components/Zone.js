import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import Saisie from './Saisie';

export default function Zone(props) {
  return(
    <View style={styles.zoneContainer}>
      <Saisie valeur = {props.saisiInput} />
      <Saisie valeur = {props.sortieReponse} />
    </View>
  )
};

const styles = StyleSheet.create({
  zoneContainer: {
    padding : 10,
    margin : 10,
  },
});