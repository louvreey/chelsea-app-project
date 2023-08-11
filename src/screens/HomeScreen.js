import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DetailScreen from './DetailScreen';
import ContainerComponent from '../component/ContainerComponent';



const HomeScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const [nominal, setNominal] = useState(0)

  return (
    <View style={styles.mainView}>
      <View style={styles.firstContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome Back!</Text>
        </View>
        <View style={styles.sisaSaldo}>
          <Text style={styles.textSaldo}>Sisa Saldo : {nominal}</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.mainDataContainer}>
              <TouchableOpacity
                style={styles.history}
                onPress={() => navigation.navigate('DetailScreen')}>
                <ContainerComponent />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: 25,
    // marginTop: 30,
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingBottom: 30,
  },
  firstContainer: {
    alignContent: 'center',
    borderWidth: 1,
    borderRadius: 25,
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 20,
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Elsie Swash Caps',
  },
  sisaSaldo: {
    paddingRight: 50,
  },
  textSaldo: {
    color: 'black',
  },
  flatListContainer: {
    padding: 10,
  },
  date: {
    fontWeight: 'bold',
    textAlign: 'right',

  }
});
