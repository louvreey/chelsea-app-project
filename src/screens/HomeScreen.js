
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DetailScreen from './DetailScreen';
import ContainerComponent from '../component/ContainerComponent';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const [nominal, setNominal] = useState(0);

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
        </View>


        <ContainerComponent
          title="Makan diluar"
          date="12 Agustus"
          nominal="Rp 12.000"
        />

        <ContainerComponent
          title="Makan diluar"
          date="12 Agustus"
          nominal="Rp 12.000"
        />

        <ContainerComponent
          title="Makan diluar"
          date="12 Agustus"
          nominal="Rp 12.000"
        />

        <ContainerComponent
          title="Makan diluar"
          date="12 Agustus"
          nominal="Rp 12.000"
        />

        <ContainerComponent
          title="Makan diluar"
          date="12 Agustus"
          nominal="Rp 12.000"
        />

        {/* <FlatList

        <View style={styles.sisaSaldo}>
          <Text style={styles.textSaldo}>Sisa Saldo : {nominal}</Text>
        </View>
      </View>
      <ContainerComponent title="Makan diluar" date="12 Agustus" nominal="Rp 12.000" />
      {/* <FlatList

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
      /> */}
      </View>
    </ScrollView>
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
});
