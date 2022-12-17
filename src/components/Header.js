import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.heraderstyle}>
      <Text style={styles.Headertext}>Welcome</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  heraderstyle: {
    backgroundColor: "#7555CF",
    height: 80,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    elevation: 10,
  },
  Headertext: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
