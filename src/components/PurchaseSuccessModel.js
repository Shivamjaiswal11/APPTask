import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  ToastAndroid,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BottomSheet, IconButton } from "react-native-elements";
import { Route, useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "./CustomButton";
import NavigationString from "../constants/NavigationString";
const PurchaseSuccessModel = ({ isVisible, onClose, title }) => {
  const navigation = useNavigation();
  function Closesheet(){
    navigation.navigate(NavigationString.Home)
    onClose();
  }
  return (
    <BottomSheet style={styles.root} isVisible={isVisible}>
      <View style={styles.view}>
        <View style={styles.header}>
          <View
            style={{
              height: 5,
              backgroundColor: "#ccc",
              width: 40,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 21,
          }}
        >
          <Text>Purchase Success</Text>
          <Entypo name="circle-with-cross" size={24} color="#B9BAC0" onPress={(e) => onClose(e)} />
        </View>
        <View
          style={{
            // flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="checkcircle" size={66} color="#11D0A2" style={{marginTop:42}}/>
          <Text style={styles.thanhyoutext}>Thank you!</Text>
          <Text style={[styles.successfully,{  marginTop:10,}]}>Your your payment was made successfully!</Text>
          <View style={styles.separater}/>
          <Text style={styles.successfully}>Your booking ID</Text>
          <Text style={[styles.successfully,{color:'#02D9E7',fontSize:30,fontWeight:'600'}]}>#33475490</Text>
          <View style={styles.separater}/>
          <Text style={[styles.successfully,{fontSize:14}]}>You will need this booking ID to enter inside{'\n'}the event. You can view this code inside your{'\n'}profile / booked events</Text>
          <View style={{paddingHorizontal:21,width:'100%'}}>
          <CustomButton isPrimary={false} title={"CLOSE"} onPress={(e) => Closesheet(e)} />
          </View>
          <View style={styles.header}>
          <View
            style={{
              height:5,
              backgroundColor: "#f1f1f1",
              width: 135,
              borderRadius: 5,
              marginBottom:10
            }}
          />
        </View>
        </View>
      </View>
    </BottomSheet>
  );
};

export default PurchaseSuccessModel;

const styles = StyleSheet.create({
  root: {
    justifyContent: "flex-end",
    margin: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2);",
    // marginBottom: 0,
    flex: 1,
    // height: 300,
  },
  separater:{
    height:1,
    marginTop:21,
    marginBottom:18,
    backgroundColor: "#ccc",
    width:"90%",
    paddingHorizontal:21
  },
  view: {
    borderTopLeftRadius: 12,
    borderStyle: "solid",
    shadowColor: "#CCCCCC",
    borderTopRightRadius: 12,

    backgroundColor: "#ffffff",
  },

  header: {
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  thanhyoutext: {
    textAlign:'center',
    marginTop:25,
    fontSize: 40,
    fontWeight: "700",
    color: "#000",
  },
  successfully:{
    textAlign:'center',
    fontSize:16,
    fontWeight: "400",
    color: "#475464",
  }
});
