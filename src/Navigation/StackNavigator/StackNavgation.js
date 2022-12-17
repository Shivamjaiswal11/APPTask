import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpleshScreen from '../../screens/SpleshScreen';
const Stack = createNativeStackNavigator();
import Home from '../BottomTabScreen/Home';
import Current from '../BottomTabScreen/Current';
import User from '../BottomTabScreen/User';
import Settings from '../BottomTabScreen/Settings';
import Game from '../BottomTabScreen/Game';
import EventDetailes from '../../components/EventDetailes';
import BottomNavigation from '../BottomNavigation';
const StackNavgation = () => {
    
  return (
    
        <Stack.Navigator
          initialRouteName="SpleshScreen"
          // screenOptions={{
          //   headerShown: false,
          // }}
        >
          <Stack.Screen
            options={{ headerShown: false, headerSearchBarOptions: false }}
            name="SpleshScreen"
            component={SpleshScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, headerSearchBarOptions: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false, headerSearchBarOptions: false }}
            name="Current"
            component={Current}
          />
          <Stack.Screen
            options={{ headerShown: false, headerSearchBarOptions: false }}
            name="Game"
            component={Game}
          />
          <Stack.Screen
            options={{ headerShown: false, headerSearchBarOptions: false }}
            name="User"
            component={User}
          />
          <Stack.Screen
            options={{ headerShown: false, headerSearchBarOptions: false }}
            name="Settings"
            component={Settings}
          />
          <Stack.Screen
            options={{ headerShown: false,headerTintColor:'#fff' ,headerTransparent:true }}
            name="EventDetailes"
            component={EventDetailes}
          />

            </Stack.Navigator>
  )
}
// const BottomStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HOME"
//         component={BottomNavigation}
//         // options={{ headerShown: false }}
//         // options={{ header: () => <HomeHeader /> }}
//       />
//     </Stack.Navigator>
//   );
// };
// export {
//   StackNavgation,
//   BottomStack,
//   // WithTopTabStack
// };
export default StackNavgation