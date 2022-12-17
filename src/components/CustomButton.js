import React from "react";
import { TouchableOpacity, Text } from "react-native";
// import * as Animatable from "react-native-animatable";
const CustomButton = ({ title, onPress = () => {}, isPrimary, styles }) => {
  return (
    // <Animatable.View
    //   duration={1000}
    //   animation="bounceInDown"
    //   // direction='alternate'
    //   easing="ease-in-sine"
    //   iterationCount={1}
    // >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={{
          height: 55,
          width: "100%",
          backgroundColor: isPrimary ? '#11D0A2':'#936EFE',
          marginVertical: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius:100,
          borderColor: isPrimary ? '#11D0A2':'#936EFE',
          borderWidth: 2,
          elevation:5,
          ...styles,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    // </Animatable.View>
  );
};

export default CustomButton;
