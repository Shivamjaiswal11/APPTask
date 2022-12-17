import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NavigationString from "../constants/NavigationString";
import axios from "axios";
import moment from "moment/moment";
import { toFormData } from "axios";
import { FontAwesome5 } from "@expo/vector-icons";
// import { EVENTDETAILES } from "../core/URLS";
// import { doGet,doPost } from "../core/REST";

const RecommendedEventsCard = ({ setLoading }) => {
  const navigation = useNavigation();
  const [indexSelected, setIndexSelected] = useState(0);
  const flatListRef = useRef();
  const scrollX =useRef(new Animated.Value(0)).current;
  const viewItemchange =useRef(({viewableitem})=>{
    setIndexSelected(viewableitem[0].index)
  }).current;
  
  // const viewConfig= useRef({  viewAreaCoveragePercentThreshold: 100,
  //   itemVisiblePercentThreshold: 80,minimumViewTime:100}).current;
  const [allevent, setAllevent] = useState([]);
  
  useEffect(() => {
    GetAllEventDetalies();
  }, []);
  function GetAllEventDetalies() {
    setLoading(true);
    let auth = "786785e9-1b74-430a-80d9-aae49678954f";
    // var axios = require("axios");
    // var FormData = require("form-data");
    var data = new FormData();
    data.append("Authorization", auth);
    var config = {
      method: "get",
      url: "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyDeveloperTest1/allEvents?Authorization=786785e9-1b74-430a-80d9-aae49678954f",
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
        setAllevent(response?.data?.allEvents);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View>
     
      <FlatList
      
        ref={flatListRef}
        style={{ backgroundColor: "#fff", height: 200, width: "100%" }}
        horizontal
        // onScroll={Animated.event([
        //   { nativeEvent: { contentOffset: { x: scrollX } } },
        //   { useNativeDriver: false },
        // ])}
        // horizontal={true}
        data={allevent}
        // initialNumToRender={3}
        keyExtractor={(index) => index.toString()}
        scrollEventThrottle={32}
      // viewabilityConfig={viewConfig}
      // onViewableItemsChanged={viewItemchange}
      // pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ marginVertical: 10, width: 340 }}
              key={index}
              // onPress={() => {
              //   navigation.navigate(NavigationString.EventDetailes);
              // }}
            >
              <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <View
                  style={{
                    position: "relative",
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                >
                  <Image
                    source={{
                      // uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png",
                      uri: `${item.mainImage}`,
                    }}
                    style={styles.card}
                  />
                  <View
                    style={{
                      position: "absolute",
                      marginVertical: 21,
                      marginHorizontal: 21,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <AntDesign name="clockcircleo" size={20} color="white" />
                      <Text style={styles.date}>
                        {" "}
                        {moment(item.dateTime).format("DD MMM yy")}{" "}
                        {moment(item.dateTime).format("hh:mm A")}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginTop: 14,
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Text style={styles.title}>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        // width:"100%",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 21,
                        // backgroundColor:'red',
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={styles.chip}>
                        <MaterialCommunityIcons
                          name="movie-open-play"
                          size={15}
                          color="white"
                        />
                        <Text style={[styles.date]}>
                          {" "}
                          {item.ticketsSold}/{item.maxTickets}
                        </Text>
                      </View>
                      <View style={[styles.chip, { marginLeft: 10 }]}>
                        <FontAwesome5
                          name="user-friends"
                          size={12}
                          color="white"
                        />
                        <Text style={styles.date}>
                          {" "}
                          + {item.friendsAttending} friends
                        </Text>
                      </View>
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
                        <Text style={styles.date}> £ {item.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
       <View
        style={{ height: 20, flexDirection: "row", backgroundColor: "#fff" ,justifyContent:'center'}}
      >
        {allevent.map((item, index) => {
          return (
            <View
              key={index.toString()}
              style={[styles.styledote, { width: 10 }]}
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default RecommendedEventsCard;

const styles = StyleSheet.create({
  card: {
    height: 160,
    borderRadius: 25,
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
  styledote: {
    height: 10,
    borderRadius: 5,
    marginHorizontal:2,
    backgroundColor: "#ccc",
    // width: 10,
  },
});
