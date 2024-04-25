// Native import
import React from 'react';

// Navigation import
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Config import
import * as ScreenConstants from '../../constants/ScreenConstants';
import RootStack from '../stacks/RootStack';

export const Stack = createNativeStackNavigator();
export const Tab = createBottomTabNavigator();

// Screen options
export let screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

// Stacks
export const TabStackScreens = () => {
  return (
    <Stack.Screen
      name={ScreenConstants.ROOT_STACK}
      component={RootStack}
      options={screenOptions}
    />
  );
};
