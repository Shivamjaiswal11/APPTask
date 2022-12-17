import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Linking,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState ,useEffect} from "react";
import { AntDesign } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import PurchaseSuccessModel from "./PurchaseSuccessModel";
import { useRoute } from "@react-navigation/native";
import CustomButton from "./CustomButton";
import axios from "axios";
import moment from "moment/moment";
import * as Animatable from "react-native-animatable";
const EventDetailes = () => {
  const route = useRoute();
 
  // console.log(route?.params?.DetailItem);
  const DetailData = route?.params?.DetailItem;
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const price = DetailData.price;
  const [touchheart, settouchheart] = React.useState(false);
  const [purchases, setpurchase] = useState([]);
  // useEffect(() => {
  //   GetPurchaseDetalies();
  // }, []);
  // function GetPurchaseDetalies() {
  //   let auth = "786785e9-1b74-430a-80d9-aae49678954f";
  //   // var axios = require("axios");
  //   // var FormData = require("form-data");
  //   var data = new FormData();
  //   // data.append("Authorization", auth);
  //   var config = {
  //     method: "get",
  //     url: "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyDeveloperTest1/purchase",
  //     // url: "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyDeveloperTest1/checkout",
  //     headers: {
  //       Authorization: "Bearer 786785e9-1b74-430a-80d9-aae49678954f",
  //       // ...data.getHeaders(),
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       //  console.log("toady",JSON.stringify(response.data));
  //       // console.log("hii ",response.data);
  //       setpurchase(response?.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  // console.log("purchase",purchases)
 
  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
       <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="rgba(26, 4, 81, 0.4)"
          />
      <ScrollView style={{ flex: 0.8 }}>
        <View style={{ width: "100%" }}>
          <Image
            source={{
              uri: `${DetailData.mainImage}`,
            }}
            style={{
              height: 350,
              width: windowWidth,
                  }}
          />
          <View style={{ position: "absolute", width: "100%" }}>
            <View style={styles.heraderstyle}>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                onPress={(e) => {
                  navigation.goBack();
                }}
              />
            </View>
            <View
              style={{ marginTop: 225, alignItems: "center", flexWrap: "wrap" }}
            >
              <Text style={styles.Headertext}>{DetailData.name}</Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 21,
              paddingVertical: 21,
              backgroundColor: "#fff",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.desc}>
                Total prize:{" "}
                <Text style={[styles.desc, { fontWeight: "800" }]}>
                  £{DetailData.totalPrize}
                </Text>
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.chip}>
                  <Feather name="user-plus" size={17} color="white" />
                  <Text style={styles.date}> Share Event</Text>
                </View>
                <TouchableOpacity
                style={{marginLeft:5}}
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
                {DetailData.ticketsSold}/{DetailData.maxTickets} attending
              </Text>
            </View>
            <View style={{ marginTop: 17 }}>
              <Text style={styles.desc}>ABOUT :</Text>
            </View>
            <View style={{ marginTop: 17 }}>
              <Text style={[styles.abouttext,{letterSpacing:1}]} >{DetailData.description} </Text>
            </View>
            <View style={{ marginTop: 17 }}>
              <Text style={styles.desc}>LOCATION :</Text>
            </View>
            <View style={{ marginTop: 17, flexDirection: "row" }}>
              <View style={{ flex: 0.5, justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <Entypo name="location" size={17} color="black" />
                  <Text
                    style={[styles.desc, { bottom: 3, marginLeft: 5 }]}
                    lineBreakMode
                    numberOfLines={3}
                  >
                    {" "}
                    {DetailData.location}
                  </Text>
                </View>
              </View>
              <View style={{ flex: 0.1, justifyContent: "center" }} />
              <View style={{ flex: 0.4, justifyContent: "center" }}>
                <TouchableOpacity
                  style={styles.takemethrerbutton}
                >
                  <Text style={styles.takemethrerbuttontext}>
                    Take me there
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.separater} />
            <View style={{ marginTop: 17 }}>
              <Text style={styles.desc}>CONTACT :</Text>
            </View>
            <View style={{ marginTop: 17 }}>
              <Text style={styles.desc}>
                Send us an email at {"\n"}
                <Text
                  style={[styles.desc, { color: "#6658D3" }]}
                  onPress={() =>
                    Linking.openURL(
                      "mailto:contact@techalchemy.co?subject=Applying for a job&body=My Job profile is React native developer"
                    )
                  }
                >
                  contact@techalchemy.co
                </Text>{" "}
                or call us at +1 {"\n"}991-681-0200
              </Text>
            </View>
            <View style={styles.separater} />
          </View>
    
        </View>
        <PurchaseSuccessModel
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          title={"Open Market"}
        />
      </ScrollView>
      <View
        style={{
          flex: 0.2,
          flexDirection: "column",
          backgroundColor: "#fff",
          justifyContent: "center",
          paddingHorizontal: 21,
          alignItems: "center",
        }}
      >
        <CustomButton
          isPrimary={true}
          title={price + "- I’M IN!"}
          onPress={(e) => {
            //  setmsgobject(item);
            setIsModalVisible(true);
          }}
        />
        <View
          style={{
            height: 5,
            backgroundColor: "#f1f1f1",
            width: 135,
            borderRadius: 5,
            // marginBottom:10
          }}
        />
      </View>
    </View>
  );
};

export default EventDetailes;

const styles = StyleSheet.create({
  heraderstyle: {
    // backgroundColor: "rgba(26, 4, 81, 0.4)",

    paddingHorizontal: 10,
    paddingVertical: 20,
    // borderBottomLeftRadius: 35,
    // borderBottomRightRadius: 35,
  },
  image: {
    // height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  separater: {
    height: 0.7,
    marginTop: 21,
    marginBottom: 10,
    backgroundColor: "#ccc",
    width: "100%",
    paddingHorizontal: 21,
  },
  Headertext: {
    fontSize: 22,
    // marginTop: 20,
    marginLeft: 18,
    fontWeight: "700",
    color: "#fff",
  },
  chip: {
    paddingHorizontal: 13,
    paddingVertical: 5,
    backgroundColor: "#9DA6B1",
    borderRadius: 50,
    borderColor: "#9DA6B1",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  takemethrerbutton: {
    // paddingHorizontal: 13,
    height: 38,
    // paddingVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: "#6658D3",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    fontSize: 14,
    color: "#fff",
    // marginTop: 10,
    fontWeight: "500",
  },
  desc: {
    fontSize: 14,
    color: "#6a6a6a",
    // marginTop: 10,
    fontWeight: "500",
  },
  takemethrerbuttontext: {
    fontSize: 12,
    color: "#6658D3",
    // marginTop: 10,
    fontWeight: "500",
  },
  abouttext: {
    fontSize: 15,
    color: "#475464",
    // marginTop: 10,
    fontWeight: "400",
    textAlign:'justify',
    lineHeight: 20,
  },
});
