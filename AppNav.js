
import Login from './Login';
import MainPage from './MainPage';
import Success from './Success';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import GoogleAcc from './GoogleSigin';
import QrCode from './QrCode';
import ErrMsg from './ErrMsg';


const Stack = createNativeStackNavigator();

const AppNav = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
    headerShown: false,
    animation:'slide_from_right',
    animationDuration: 4000,
  }}>
      <Stack.Screen 
              name="MainPage" 
              component={MainPage} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ErrMsg" component={ErrMsg} />
      <Stack.Screen name="GoogleAcc" component={GoogleAcc} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNav;