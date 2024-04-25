import React from 'react';

// Config import
import * as TextConstants from '../../constants/TextConstants';
import * as ScreenConstants from '../../constants/ScreenConstants';

// Screens/Navigation import
import { screenOptions, Stack } from '.';
import NewsScreen from '../../screens/NewsScreen';

// Component import
import { fontSizes } from '../../styles';
import BackNavButton from '../../components/BackNavButton';
import NewsDetailsScreen from '../../screens/NewsDetailsScreen';


export const NewsStackScreen = (translate: { (keyName: string): string }, theme: any) => {
  return (
    <Stack.Screen
      name={ScreenConstants.NEWS_SCREEN}
      component={NewsScreen}
      options={{
        ...screenOptions,
        headerTitle: translate(TextConstants.NEWS_TITLE),
        headerTitleStyle:{
          color: theme.tint,
          fontSize: fontSizes.xxxLarge,
        },
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.primary,
        },
      }}
    />
  );
};

export const NewsDetailsStackScreen = (translate: { (keyName: string): string }, theme: any) => {
  return (
    <Stack.Screen
      name={ScreenConstants.NEWS_DETAILS_SCREEN}
      component={NewsDetailsScreen}
      options={{
        ...screenOptions,
        headerTitle: translate(TextConstants.NEWS_DETAILS_TITLE),
        headerTitleStyle:{
          color: theme.tint,
          fontSize: fontSizes.xxxLarge,
        },
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerLeft: () => <BackNavButton />,
      }}
    />
  );
};