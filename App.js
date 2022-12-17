import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import StackNavgation from './src/Navigation/StackNavigator/StackNavgation';
export default function App() {
  return (
  <NavigationContainer>
    <StackNavgation/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
