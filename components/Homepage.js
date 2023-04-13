import React, { useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from '@react-navigation/native';

export default function Homepage() {

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['black', 'rgb(89, 97, 249)', 'rgb(7, 13, 117)']}
        style={styles.grad}
        start={{ x: 0.9, y: 0 }}
      >
        <TouchableHighlight style={[styles.welcome, { flex: 1.1}]} 
                          activeOpacity={0.005} 
                          underlayColor={"rgba(255,255,255,.005)"} 
                          onPress={() => alert('Redirect')}>
          <>
            <Text style={[styles.btnText, 
                        {fontSize: 30},
                        {textAlign: "left"},
                        {fontWeight: "bold"}]}>Welcome</Text>
            <Text style={[styles.btnText, 
                        {fontSize: 100},
                        {textAlign: "left"},
                        {fontWeight: "bold"}]}>Evan</Text>
          </>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} 
                          activeOpacity={0.005} 
                          underlayColor={"rgba(255,255,255,.005)"} 
                          onPress={() => alert('Go to Preview')}>
          <Text style={styles.btnText}>Preview today's workout</Text>
        </TouchableHighlight>

        <View style={styles.row}>
          <TouchableHighlight style={[styles.button, {flex: 1}]} 
                            activeOpacity={0.005} 
                            underlayColor={"rgba(255,255,255,.005)"} 
                            onPress={() => alert('Go to plan')}>
            <Text style={styles.btnText}>Your ______{'\n'}_____ Plan</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, {flex: 1}]} 
                            activeOpacity={0.005} 
                            underlayColor={"rgba(255,255,255,.005)"} 
                            onPress={() => alert('Go to nutrition page')}>
            <Text style={styles.btnText}>Nutrition{'\n'}Database</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.row}>
          <TouchableHighlight style={[styles.button, {flex: 1}]} 
                            activeOpacity={0.005} 
                            underlayColor={"rgba(255,255,255,.005)"} 
                            onPress={() => alert('Go to activity')}>
            <Text style={styles.btnText}>Activity{'\n'}Monitor</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, {flex: 1}]} 
                            activeOpacity={0.005} 
                            underlayColor={"rgba(255,255,255,.005)"} 
                            onPress={() => alert('Go to progress')}>
            <Text style={styles.btnText}>Progress{'\n'}Chart</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight style={styles.button} 
                          activeOpacity={0.005} 
                          underlayColor={"rgba(255,255,255,.005)"} 
                          onPress={() => alert('Go to social')}>
          <Text style={styles.btnText}>Friends & Leaderboards</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} 
                          activeOpacity={0.005} 
                          underlayColor={"rgba(255,255,255,.005)"} 
                          onPress={() => alert('Go to awards')}>
          <Text style={styles.btnText}>Your Awards</Text>
        </TouchableHighlight>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#f9ded2',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  welcome: {
    flex: .2,
    fontSize: 30,
    borderRadius: 20,
    marginHorizontal: 7,
    marginVertical: 7,
    padding: 10,
    alignSelf: "stretch",
    backgroundColor: "transparent",
    fontWeight: 600,
    justifyContent: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: .2,
    fontSize: 30,
    borderRadius: 20,
    marginHorizontal: 7,
    marginVertical: 7,
    padding: 10,
    alignSelf: "stretch",
    backgroundColor: "rgb(17, 19, 66)",
    overflow: "hidden",
    fontWeight: 600,
    justifyContent: "center"
  },
  btnText: {
    fontSize: 30,
    color: "white",
    fontWeight: 600,
    textAlign: "center"
  },
  grad: {
    flex: 1,
    display: "flex",
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10
  }
});
