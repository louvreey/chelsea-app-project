import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailComponent from '../component/DetailComponent';

const DetailScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Detail</Text>
        </View>
      </View>
      <DetailComponent
        date="14 Agustus"
        jenis=" Pemasukan"
        deskripsi=" Uang Jajan"
        nominal=" Rp 15.000"
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: 25,
  },
  mainContainer: {
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 25,
    padding: 20,
    marginTop: 30,
    marginBottom: 50,
  },
  titleContainer: {
    marginBottom: 10,
    marginTop: 5
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    textAlign: 'center',
  },
});
