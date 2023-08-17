import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import DetailScreen from './DetailScreen';
import ContainerComponent from '../component/ContainerComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import realm from '../../store/realm';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const [nominal, setNominal] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const transactionListPage = navigation.addListener('focus', () => {
      const transaction = realm.objects('Transaction');
      const transactionByDate = transaction.sorted('date', true);
      setData(transactionByDate);
      setSearchText('');
    });
    return transactionListPage;
  }, []);

  const dateFormat = date => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const transactionDate = new Date(date);
    const dateOnly = transactionDate.getDate();
    const monthOnly = transactionDate.getMonth();
    const yearOnly = transactionDate.getFullYear();

    return months[monthOnly] + '' + dateOnly + ',' + yearOnly;
  };

  const saveTransaction = newTransaction => {
    const allData = realm.objects('Transaction');
    const dataLength = allData.length;
    let lastIdfromrealm = 0;

    if (dataLength !== 0) {
      lastIdfromrealm = allData[dataLength - 1].id;
    }

    if (newTransaction !== '') {
      realm.write(() => {
        realm.create('Transaction', {
          id: dataLength == 0 ? 1 : lastIdfromrealm + 1,
          nominal: newTransaction,
          date: new Date().toISOString(),
          type: 'Pengeluaran',
        });
      });
      Alert.alert('Successfully save your Transaction!');

      setModalVisible(false);

      const data = realm.objects('Transaction');
      console.log(data);
    } else {
      Alert.alert('Empty Transaction!');
    }
  };

  const onDelete = id => {
    realm.write(() => {
      const removeData = realm.objects('Product').filtered(`id = ${id}`);
      realm.delete(removeData);
    });
    Alert.alert('Successfully removed the transaction');
  };

  const getCurrentDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const transactionDate = new Date();
    const dateOnly = transactionDate.getDate();
    const monthOnly = transactionDate.getMonth();
    const yearOnly = transactionDate.getFullYear();

    return months[monthOnly] + '' + dateOnly + ',' + yearOnly;
  };

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.firstContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Welcome Back!</Text>
          </View>
          <View style={styles.profileImage}>
            <Image
              source={require('../../assets/images/profile-picture.png')}
            />
          </View>
          <View style={styles.sisaSaldo}>
            <Text style={styles.textSaldo}>Sisa Saldo : {nominal}</Text>
          </View>
          <FlatList
            contentContainerStyle={styles.flatListContainer}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <ContainerComponent
                  title={item.note}
                  date={dateFormat(item.date)}
                  nominal={item.nominal}
                  type={item.type}
                  onLongPress={() => onDelete(item.id)}
                  onPress={() => navigation.navigate('DetailScreen')}
                />
              );
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}>
            <Icon name="plus" type="antdesign" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Nominal</Text>
            <TextInput style={styles.input} placeholder="Isi Nominal" />
            <Text style={styles.title}>Jenis Transaksi</Text>
            <TextInput style={styles.input} placeholder="Isi Jenis Transaksi" />
            <Text style={styles.title}>Deskripsi</Text>
            <TextInput style={styles.input} placeholder="Deskripsi" />

            <TouchableOpacity
              style={styles.button}
              onPress={() => saveTransaction()}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
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
    marginTop: 20,
    marginBottom: 45,
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
  },
  profileImage: {
    height: 190,
    width: 23,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addButton: {
    backgroundColor: 'pink',
    padding: 16,
    borderRadius: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightgray',
  },
  title: {
    marginBottom: 10,
  },
});
