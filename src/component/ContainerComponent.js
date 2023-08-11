import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const ContainerComponent = () => {
  const {title, date, nominal} = props;
  return (
    <View style={styles.mainContainer} >
      <Text style={styles.date}>15 Januari 2023 *date*</Text>
      <Text style={styles.title}>Makan *title*</Text>
      <Text style={styles.nominal}>IDR 50.000 *nominal*</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 25,
  },
  date: {
    textAlign: 'right',
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  nominal: {
    margin: 10,
  },
});
