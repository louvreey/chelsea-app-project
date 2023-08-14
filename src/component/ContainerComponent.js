import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ContainerComponent = (props) => {
  const { title, date, nominal } = props;
  return (
    <View style={styles.mainContainer} {...props}>

      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.nominal}>{nominal}</Text>
    </View>
  );
};

export default ContainerComponent

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
