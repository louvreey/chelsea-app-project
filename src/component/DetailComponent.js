import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailComponent = props => {
  const {date, jenis, deskripsi, nominal} = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.jenis}>Jenis Transaksi : {jenis}</Text>
      <Text style={styles.deskripsi}>Deskripsi :{deskripsi}</Text>
      <Text style={styles.nominal}>Nominal :{nominal}</Text>
    </View>
  );
};

export default DetailComponent;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
  jenis: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: 'black',
    marginBottom: 10,
  },
  deskripsi: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: 'black',
    marginBottom: 10,
  },
  nominal: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: 'black',
    marginBottom: 10,
  },
});
