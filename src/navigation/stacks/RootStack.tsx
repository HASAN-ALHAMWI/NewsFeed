// Config import
import * as ScreenConstants from '../../constants/ScreenConstants';

// Screen import
import {screenOptions, Stack} from '../screens';

// Hooks import
import useTranslations from '../../hooks/useTranslations';

// Screen import
import {
  NewsDetailsStackScreen,
  NewsStackScreen,
} from '../screens/RootScreens';

// Style import
import { Theme } from '../../config/theme';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const RootStack = () => {
  const [translate] = useTranslations();
  const { theme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];

  return (
    <Stack.Navigator
      initialRouteName={ScreenConstants.NEWS_SCREEN}
      screenOptions={{
        ...screenOptions
      }}>
      {NewsStackScreen(translate,activeColors)}
      {NewsDetailsStackScreen(translate,activeColors)}
    </Stack.Navigator>
  );
};

export default RootStack;
