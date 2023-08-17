import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import RecapScreen from '../screens/RecapScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={{color: focused ? 'black' : 'grey', fontSize: 12}}>
            Home
          </Text>
        ),
        tabBarIcon: ({focused}) => (
          <Icon
            name="home"
            type="material-community"
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />

    <Tab.Screen
      name="RecapScreen"
      component={RecapScreen}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={{color: focused ? 'black' : 'grey', fontSize: 12}}>
            Recap
          </Text>
        ),
        tabBarIcon: ({focused}) => (
          <Icon
            name="file-chart"
            type="material-community"
            color={focused ? 'green' : 'grey'}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecapScreen">
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="RecapScreen"
          component={RecapScreen}
          options={{
            headerShown: false,
          }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
