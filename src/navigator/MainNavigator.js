import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator;

const StartScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? 'green' : 'grey', fontSize: 12}}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="plus"
              type="material-community"
              color={focused ? 'purple' : 'grey'}
              size={24}
            />
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />

      <Tab.Screen
        name="AddScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? 'green' : 'grey', fontSize: 12}}>
              New
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              type="material-community"
              color={focused ? 'purple' : 'grey'}
              size={24}
            />
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyle: {
              flex: 1,
              backgroundColor: '#E6E6FA',
            },
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: false,
            headerStyle: {
              flex: 1,
              backgroundColor: '#E6E6FA',
            },
          }}
        />

        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            headerShown: false,
            headerStyle: {
              flex: 1,
              backgroundColor: '#E6E6FA',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
