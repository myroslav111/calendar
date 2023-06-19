import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Calendar from '../screens/Calendar';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='Calendar'
          component={Calendar}
          options={{ title: 'Calendar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
