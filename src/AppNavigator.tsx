import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREEN_NAMES} from '@constants';
import {Home} from '@screens';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);
