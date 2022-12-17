import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5, Ionicons, Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import axios from "axios";
import moment from "moment/moment";
import { useNavigation } from "@react-navigation/native";
import NavigationString from "../constants/NavigationString";
const AllEventsCard = ({ setLoading }) => {
  const [touchheart, settouchheart] = React.useState(false);
  const navigation = useNavigation();
  const [eventDetails, seteventDetails] = useState([]);
  useEffect(() => {
    GetEventDetalies();
  }, []);
  function GetEventDetalies() {
    setLoading(true);
    let auth = "786785e9-1b74-430a-80d9-aae49678954f";
    // var axios = require("axios");
    // var FormData = require("form-data");
    var data = new FormData();
    data.append("Authorization", auth);
    var config = {
      method: "get",
      url: "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyDeveloperTest1/eventDetails",
      headers: {
        Authorization: "Bearer 786785e9-1b74-430a-80d9-aae49678954f",
        // ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //  console.log("toady",JSON.stringify(response.data));
        // console.log("hii ",response.data);
        seteventDetails(response?.data?.eventDetails);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // console.log("1212", eventDetails);
  return (
  
    <FlatList
      style={{ backgroundColor: "#fff", width: "100%" }}
      data={eventDetails}
      keyExtractor={(index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            key={index}
            onPress={() => {
              navigation.navigate(NavigationString.EventDetailes, {
                DetailItem: item,
              });
            }}
          >
            <View
              style={styles.boxWithShadow}
            >
              <Image
                source={{
                  uri: `${item.mainImage}`,
                }}
                style={{
                  height: 185,
                  width: "100%",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  marginVertical: 21,
                  //   marginHorizontal: 21,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 21,
                    marginHorizontal: 21,
                  }}
                >
                  <View
                    style={[
                      styles.chip,
                      {
                        marginLeft: 12,
                        backgroundColor: "#02D9E7",
                        borderColor: "#02D9E7",
                      },
                    ]}
                  >
                    <Text style={styles.date}>
                      {item.isPartnered == true ? "Partnered" : "NotPartnered"}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.chip,
                      { marginLeft: 7, backgroundColor: "#fff" },
                    ]}
                  >
                    <Text style={[styles.date, { color: "#000" }]}>
                      {item.sport}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 14,
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginHorizontal: 21,
                  }}
                >
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 16,
                    width: "100%",
                    paddingLeft: 21,
                    position:'relative'
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesign name="clockcircleo" size={20} color="white" />
                    <Text style={styles.date}>
                      {" "}
                      {moment(item.dateTime).format("DD MMM yy")}{" "}
                      {moment(item.dateTime).format("hh:mm A")}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginLeft:20
                    }}
                  >
                    <View
                      style={[
                        styles.chip,
                        {
                          backgroundColor: "#02D9E7",
                          borderColor: "#02D9E7",
                        },
                      ]}
                    >
                      <Text style={styles.date}> £{item.price}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ marginHorizontal: 21, marginVertical: 21 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.desc}>
                    Total prize:{" "}
                    <Text style={[styles.desc, { fontWeight: "800" }]}>
                      £{item.totalPrize}
                    </Text>
                  </Text>
                 
                  <TouchableOpacity
                    onPress={() => {
                      settouchheart(!touchheart);
                    }}
                  >
                    {touchheart ? (
                      <Ionicons name="heart-outline" size={26} color="black" />
                    ) : (
                      <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount={5}
                    style={{ textAlign: "center", fontSize:20 }}
                  >
                    ❤️
                  </Animatable.Text>
                    )}
                  </TouchableOpacity>
                
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 17,
                    alignItems: "center",
                  }}
                >
                  <FontAwesome5 name="user-circle" size={17} color="black" />
                  <Text
                    style={[
                      styles.desc,
                      { fontWeight: "800", color: "#0FC6C0" },
                    ]}
                  >
                    {" "}
                    Event Creator:{" "}
                    <Text style={[styles.desc, {}]}>{item.eventCreator}</Text>
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 17,
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="movie-open-play"
                    size={17}
                    color="black"
                  />
                  <Text
                    style={[
                      styles.desc,
                      {
                        fontWeight: "800",
                        color: "#936EFE",
                        textDecorationLine: "underline",
                      },
                    ]}
                  >
                    {" "}
                    {item.ticketsSold}/{item.maxTickets} attending total
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 17,
                    alignItems: "center",
                  }}
                >
                  <Entypo name="location" size={17} color="black" />
                  <Text style={[styles.desc]}>{item.location}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
   
  );
};

export default AllEventsCard;

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 15,
    borderRadius: 25,
    borderWidth: 1,
    shadowColor: "#ccc",
    borderColor: "#ddd",
    // padding: 8,
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: "#fff",
  },
  title: {
    color: "#2a2a2a",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },
  desc: {
    fontSize: 14,
    color: "#6a6a6a",
    // marginTop: 10,
    fontWeight: "500",
  },
  date: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
  },
  title: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
  chip: {
    paddingHorizontal: 13,
    paddingVertical: 5,
    backgroundColor: "#000",
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  chiptext: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});
