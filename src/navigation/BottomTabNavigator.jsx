import React from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';

const Tab = createBottomTabNavigator();

const homeIcon = require('../../assets/images/home.png');
const tasksIcon = require('../../assets/images/tasks.png');

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#E5E7EB',
          height: 60,
        },
        tabBarIcon: ({ focused }) => {
          const icon = route.name === 'Home' ? homeIcon : tasksIcon;
          return (
            <Image
              source={icon}
              style={{
                width: 22,
                height: 22,
                tintColor: focused ? '#4F46E5' : '#9CA3AF',
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text style={{ fontSize: 12, color: focused ? '#4F46E5' : '#9CA3AF', marginBottom: 4 }}>
            {route.name}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tasks" component={TaskScreen} />
    </Tab.Navigator>
  );
}
