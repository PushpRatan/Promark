import { StatusBar } from 'expo-status-bar';
import './global.css';
import ScreenTabNavigator from '~/navigation/ScreenNavigation';
import { enableScreens } from 'react-native-screens';
enableScreens();
export default function App() {
  return (
    <>
      {/* <Home title="Home" path="App.tsx" /> */}
      <ScreenTabNavigator />
      <StatusBar style="auto" />
    </>
  );
}
