import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { useSelector } from 'react-redux';
import SplashScreen from '../screens/splashScreen';

const RootNavigator = () => {
  const isAuthenticated = useSelector(
    state => state.auth.isAuthedicated
  )

  if (isAuthenticated === null) {
    return <SplashScreen />
  }

  console.log("isAuthenticated",isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
