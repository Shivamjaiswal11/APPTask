import { StyleSheet } from 'react-native'
import React from 'react'
import { View, Text, StatusBar, Image, Linking } from 'react-native';
import NavigationString from '../constants/NavigationString';
import { useNavigation } from '@react-navigation/native';
const SpleshScreen = () => {
    const navigation = useNavigation();
    setTimeout(() => {
        navigation.replace(NavigationString.Home);
          },3000);
  return (
    <View style={{ flex: 1, backgroundColor: '#7555CF', }}>
    <StatusBar barStyle="light-content" hidden={false} backgroundColor="#7555CF" />
   
    <View
      style={{
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7555CF',
      }}
    >
        <View style={{
        width:123,
        height:123,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25,
        backgroundColor: '#fff',
      }}>
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 100, height: 100 ,resizeMode:'contain'}}
      />
      </View>
    </View>
    <View
      style={{
        flex: 0.1,
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Text style={{color:'rgba(255, 255, 255, 0.67)',fontSize:12}}>© 2020 Are You In app. All rights reserved</Text>
    </View>
  </View>
  )
}

export default SpleshScreen

const styles = StyleSheet.create({})