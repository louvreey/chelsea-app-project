
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import RecapScreen from '../screens/RecapScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'black' : 'grey', fontSize: 12 }}>
            Home
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
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
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'black' : 'grey', fontSize: 12 }}>
            Recap
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
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

const StartScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : '#808080', fontSize: 12 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Icon
              name="plus"
              type="material-community"
              color={focused ? '#800080' : '#808080'}
              size={24}
            />
          ),
          tabBarLabelPosition: 'below-icon',
        }}
      />

      <Tab.Screen
        name="AddScreen"
        component={DetailScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'green' : 'grey', fontSize: 12 }}>
              New
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
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
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
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
