import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import realm from '../../store/realm';

const RecapScreen = () => {
  const [ringkasanBulanan, setringkasanBulanan] = useState([]);

  const transactions = realm.objects('Transaction');

  const date = newDate();
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  const ringkasanPerBulan = (year, month) => {
    const filteredData = transactions.filtered(
      `YEAR(date) = ${year} AND MONTH(date) = ${month}`,
    );

    const total = filteredData.sum('amount');

    return {
      year,
      month,
      total,
      transactions: filteredData,
    };
  };

  const summary = ringkasanPerBulan(year, month);

  return (
    <View>
      {/* Tampilkan data rekap */}
      <Text>Year: {summary.year}</Text>
      <Text>Month: {summary.month}</Text>
      <Text>Total: {summary.total}</Text>
      <Text>Transactions: {summary.transactions}</Text>
    </View>
  );
};

export default RecapScreen;

const styles = StyleSheet.create({});
