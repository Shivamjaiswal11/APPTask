import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React ,{useEffect,useState} from "react";
import BottomNavigation from "../BottomNavigation";
import Tabs from "../Tabs";
import Header from "../../components/Header";
import RecommendedEventsCard from "../../components/RecommendedEventsCard";
import AllEventsCard from "../../components/AllEventsCard";
import Loader from "../../components/Loader";

const Home = () => {
  const [loading, setLoading] = React.useState(false);


  
  return (
    <>
      <Loader visible={loading} />
     <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#7555CF"
      />
      <Header />
    <ScrollView style={{flex:1}}>
    <View style={{flex:1}}>
      <Text style={styles.text}>Recommended Events</Text>
      <View style={{width:'100%'}}>
      <RecommendedEventsCard setLoading={setLoading} />
      </View>
      <View style={{ marginTop: 0 }}>
        <Text style={styles.text}>All events</Text>
        <AllEventsCard setLoading={setLoading}/>
        {/* <Tabs/> */}
      </View>
      </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: "#565066",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 29,
    marginLeft: 21,
  },
});
