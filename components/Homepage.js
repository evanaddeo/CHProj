import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Routine from "./Routine";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Serves as the homepage section for finding new premade workouts
const DiscoverSection = () => (
  <View style={styles.screen}>
    <Text style={styles.labelTxt}> Featured workouts </Text>
    <ScrollView horizontal={true} style={styles.scroller}>
      <Routine name="workout1"/>
      <Routine name="workout1"/>
      <Routine name="workout1"/>
      <Routine name="workout1"/>
      <Routine name="workout1"/>
      <Routine name="workout1"/>
    </ScrollView>
  </View>
);

// main arrow function to combine various sections
const Homepage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Recents />
      <View style={styles.screen}>
        <Text style={styles.labelTxt}> Your plan </Text>
      </View>
      <DiscoverSection />
      <View style={{paddingBottom: 50}}></View>
    </SafeAreaView>
  );
};

export default Homepage;

// Header portion for name, date, profile picture, & profile button
const Header = () => (
  <View style={styles.hdr}>
    <Image 
      style= {[{width: 50}, 
              {height: 50}, 
              {borderRadius: 50},
              {borderWidth: 1},
              {marginHorizontal: 10}]}
      source={require("../assets/images/model.png")} />
    <View style={[{display: "flex"}, {flex: .95}]}>
      <Text style={styles.headerText}>Hi, name </Text>
      <Text style={styles.dateTxt}>02/24/2002 </Text>
    </View>
    <Icon name="user" style={styles.profBtn} size="15"/>
  </View>
);

const Recents = () => (
  <View style={styles.screen}>
    <Text style={styles.labelTxt}> Recent Activity </Text>
    <View style={[{flexDirection: "row"},
                  {justifyContent: "space-evenly"},
                  {alignItems: "center"},
                  {flex: 1}]}>
      <TouchableOpacity style={styles.act}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.act}>
        <Text>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.act}>
        <Text>3</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: '#e8ecf4',
  },
  screen: {
    margin: "3%",
    flex: 1,
    width: "95%",
  },
  hdr: {
    margin: "3%",
    flex: .4,
    width: "95%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  headerText: {
    fontSize: 25,
    fontWeight: 500
  },
  dateTxt: {
    color: "rgb(74, 76, 79)",
    marginTop: 2,
    fontWeight: 400
  },
  profBtn: {
    marginRight: "3%"
  },
  act: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: 65
  },
  featured: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    paddingHorizontal: 80,
    borderWidth: 1,
  },
  labelTxt: {
    marginLeft: 5,
    fontSize: 23,
    fontWeight: 500
  }
});