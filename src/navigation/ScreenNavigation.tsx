import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
// import GetStarted from '../screens/onboarding/GetStarted';
// import SignIn from '../screens/onboarding/SignIn';
// import SignUp from '../screens/onboarding/SignUp';
// import StartYourJourney from '../screens/StartYourJourney';
import Home from '../screens/Home';
import Scanning from '../screens/Scanning';
import Devices from '../screens/Device';

const Stack = createNativeStackNavigator();
// Main Tab Navigator
export default function ScreenTabNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ animation: 'slide_from_bottom' }}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Scanning"
          component={Scanning}
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Devices"
          component={Devices}
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
