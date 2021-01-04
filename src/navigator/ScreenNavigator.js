// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screen/splash/Splash';
import {Choose} from '../screen/chooseScreen/Choose';
import {FlatChoose} from '../screen/chooseScreen/FlatChoose';

const Stack = createStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FlatChoose"
          component={FlatChoose}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Choose"
          component={Choose}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
