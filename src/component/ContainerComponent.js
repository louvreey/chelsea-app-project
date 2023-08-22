
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const ContainerComponent = (props) => {
  const { title, date, nominal, type } = props;
  return (
    <View style={styles.mainContainer}>
      <Icon style={styles.date} name='delete' size={20} {...props} />
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{type}</Text>
      <Text style={styles.nominal}>{nominal}</Text>
    </View>
  );
};

export default ContainerComponent

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    backgroundColor: 'white'
  },
  date: {
    textAlign: 'right',
    margin: 5,
    justifyContent: 'flex-end',
    paddingRight: 9,
    fontSize: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 15,
  },
  nominal: {
    margin: 10,
    paddingLeft: 5,
  },
});
