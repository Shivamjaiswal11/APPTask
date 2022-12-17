import { View, Text, Image, TouchableOpacity, StyleSheet,LogBox } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Current from "./BottomTabScreen/Current";
import Home from "./BottomTabScreen/Home";
import Settings from "./BottomTabScreen/Settings";
import User from "./BottomTabScreen/User";
import Game from "./BottomTabScreen/Game";
import StackNavgation from "./StackNavigator/StackNavgation";
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor:'#fff' ,height:70,borderTopLeftRadius:20,borderTopRightRadius:20},
      
        // options
      }}
    >

      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <Image
                source={
                  focused
                    ? require("../../assets/home.png")
                    : require("../../assets/home.png")
                }
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#465bd8" : "#707070",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Current"
        component={Current}
        // initialParams={{ isPage: true }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <Image
                source={
                  focused
                    ? require("../../assets/shape.png")
                    : require("../../assets/shape.png")
                }
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,

                  tintColor: focused ? "#465bd8" : "#707070",
                }}
              />
              
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Game"
        component={Game}
        options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 5,
                }}
              >
                <Image
                  source={
                    focused
                      ? require("../../assets/game.png")
                      : require("../../assets/game.png")
                  }
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
  
                    tintColor: focused ? "#465bd8" : "#707070",
                  }}
                />
                
              </View>
            ),
          }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <Image
                source={
                  focused
                    ? require("../../assets/shape.png")
                    : require("../../assets/shape.png")
                }
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,

                  tintColor: focused ? "#465bd8" : "#707070",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 5,
              }}
            >
              <Image
                source={
                  focused
                    ?  require("../../assets/setting.png")
                    :  require("../../assets/setting.png")
                }
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#465bd8" : "#707070",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#465bd8",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
