import React, { useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


export default function App() {

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#f9ded2', '#8a5853']}
        style={styles.grad}
        start={{ x: .2, y: .2 }}
        end={{ x: 1, y: 1 }}
      >
      <Text style={[styles.btn, {flex: 1}, {fontSize: 80}, {fontWeight: 800}]}>Welcome{'\n'}Evan!</Text>
      <Text style={[styles.btn, {flex: .2}]}>Preview today's workout</Text>
      <View style={styles.row}>
        <Text style={styles.btn}>{'\n'}Your ______{'\n'}_____ Plan</Text>
        <Text style={styles.btn}>{'\n'}Nutrition{'\n'}Database</Text>
      </View>
      <View style={styles.row}>
      <Text style={styles.btn}>{'\n'}Activity{'\n'}Monitor</Text>
        <Text style={styles.btn}>{'\n'}Progress{'\n'}Chart</Text>
      </View>
      <Text style={[styles.btn, {flex: .2}]}>Friends & Leaderboards</Text>
      <Text style={[styles.btn, {flex: .2}]}>Your Awards</Text>
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
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
    fontSize: 30,
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    alignSelf: "stretch",
    textAlign: "center",
    backgroundColor: "rgba(167, 243, 250, .99)",
    overflow: "hidden",
    color: "black",
    fontWeight: 600
  },
  grad: {
    flex: 1,
    display: "flex",
    backgroundColor: '#f9ded2',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 50,
    paddingBottom: 30
  }
});
