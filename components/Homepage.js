// import React, { useState} from "react"
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from '@react-navigation/native';

import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Routine from "./Routine";
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome5';

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

// export default function Homepage() {

//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={['black', 'rgb(89, 97, 249)', 'rgb(7, 13, 117)']}
//         style={styles.grad}
//         start={{ x: 0.9, y: 0 }}
//       >
//         <TouchableHighlight style={[styles.welcome, { flex: 1.1}]} 
//                           activeOpacity={0.005} 
//                           underlayColor={"rgba(255,255,255,.005)"} 
//                           onPress={() => alert('Redirect')}>
//           <>
//             <Text style={[styles.btnText, 
//                         {fontSize: 30},
//                         {textAlign: "left"},
//                         {fontWeight: "bold"}]}>Welcome</Text>
//             <Text style={[styles.btnText, 
//                         {fontSize: 100},
//                         {textAlign: "left"},
//                         {fontWeight: "bold"}]}>Evan</Text>
//           </>
//         </TouchableHighlight>

//         <TouchableHighlight style={styles.button} 
//                           activeOpacity={0.005} 
//                           underlayColor={"rgba(255,255,255,.005)"} 
//                           onPress={() => alert('Go to Preview')}>
//           <Text style={styles.btnText}>Preview today's workout</Text>
//         </TouchableHighlight>

//         <View style={styles.row}>
//           <TouchableHighlight style={[styles.button, {flex: 1}]} 
//                             activeOpacity={0.005} 
//                             underlayColor={"rgba(255,255,255,.005)"} 
//                             onPress={() => alert('Go to plan')}>
//             <Text style={styles.btnText}>Your ______{'\n'}_____ Plan</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={[styles.button, {flex: 1}]} 
//                             activeOpacity={0.005} 
//                             underlayColor={"rgba(255,255,255,.005)"} 
//                             onPress={() => alert('Go to nutrition page')}>
//             <Text style={styles.btnText}>Nutrition{'\n'}Database</Text>
//           </TouchableHighlight>
//         </View>

//         <View style={styles.row}>
//           <TouchableHighlight style={[styles.button, {flex: 1}]} 
//                             activeOpacity={0.005} 
//                             underlayColor={"rgba(255,255,255,.005)"} 
//                             onPress={() => alert('Go to activity')}>
//             <Text style={styles.btnText}>Activity{'\n'}Monitor</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={[styles.button, {flex: 1}]} 
//                             activeOpacity={0.005} 
//                             underlayColor={"rgba(255,255,255,.005)"} 
//                             onPress={() => alert('Go to progress')}>
//             <Text style={styles.btnText}>Progress{'\n'}Chart</Text>
//           </TouchableHighlight>
//         </View>

//         <TouchableHighlight style={styles.button} 
//                           activeOpacity={0.005} 
//                           underlayColor={"rgba(255,255,255,.005)"} 
//                           onPress={() => alert('Go to social')}>
//           <Text style={styles.btnText}>Friends & Leaderboards</Text>
//         </TouchableHighlight>

//         <TouchableHighlight style={styles.button} 
//                           activeOpacity={0.005} 
//                           underlayColor={"rgba(255,255,255,.005)"} 
//                           onPress={() => alert('Go to awards')}>
//           <Text style={styles.btnText}>Your Awards</Text>
//         </TouchableHighlight>
//       </LinearGradient>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     backgroundColor: '#f9ded2',
//     alignItems: 'center',
//     justifyContent: 'space-evenly'
//   },
//   welcome: {
//     flex: .2,
//     fontSize: 30,
//     borderRadius: 20,
//     marginHorizontal: 7,
//     marginVertical: 7,
//     padding: 10,
//     alignSelf: "stretch",
//     backgroundColor: "transparent",
//     fontWeight: 600,
//     justifyContent: "center"
//   },
//   row: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   button: {
//     flex: .2,
//     fontSize: 30,
//     borderRadius: 20,
//     marginHorizontal: 7,
//     marginVertical: 7,
//     padding: 10,
//     alignSelf: "stretch",
//     backgroundColor: "rgb(17, 19, 66)",
//     overflow: "hidden",
//     fontWeight: 600,
//     justifyContent: "center"
//   },
//   btnText: {
//     fontSize: 30,
//     color: "white",
//     fontWeight: 600,
//     textAlign: "center"
//   },
//   grad: {
//     flex: 1,
//     display: "flex",
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingBottom: 20,
//     paddingHorizontal: 10
//   }
// });
