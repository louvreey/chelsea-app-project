import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import DetailComponent from '../component/DetailComponent';
import { useNavigation } from '@react-navigation/native';
import realm from '../../store/realm';
import { Icon } from 'react-native-elements';

const DetailScreen = () => {
  const { navigation } = useNavigation();
  const [income, setIncome] = useState()
  const [expense, setExpense] = useState("")

  useEffect(() => {
    onRefresh()
  })

  const onRefresh = () => {
    const data = realm.objects("Transaction")
    const expense = data.filtered('type = "Pengeluaran"')
    var expenseValue = 0
    expense.forEach((element) => {
      expenseValue += parseInt(element.nominal)
    })
    setExpense(expenseValue.toString())
    const income = data.filtered('type = "Pemasukan"')
    var incomeValue = 0
    income.forEach((element) => {
      incomeValue += parseInt(element.nominal)
    })
    setIncome(incomeValue.toString())
  }

  return (
    <View style={styles.mainView} onPress={() => navigation.navigate('DetailScreen')}>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Icon name='refresh' onPress={() => onRefresh()} />
          <Text style={styles.title}>Recap</Text>
          <Text style={styles.title}>{"Pengeluaran: " + expense}</Text>
          <Text style={styles.title}>{"Pemasukan: " + income}</Text>
        </View>
      </View>
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
