import React, { useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
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
        <TouchableHighlight style={[styles.button, { flex: 1.5}]} 
                          activeOpacity={0.005} 
                          underlayColor={"rgba(255,255,255,.005)"} 
                          onPress={() => alert('Redirect')}>
          <Text style={[styles.btnText, 
                        {fontSize: 80},
                        {fontWeight: "bold"}]}>Welcome{'\n'}Evan!</Text>
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
                          onPress={() => alert('Go to friends')}>
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
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: .2,
    fontSize: 30,
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: 7,
    marginVertical: 7,
    padding: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(167, 243, 250, .99)",
    overflow: "hidden",
    color: "black",
    fontWeight: 600,
    justifyContent: "center"
  },
  btnText: {
    fontSize: 30,
    color: "black",
    fontWeight: 600,
    textAlign: "center"
  },
  grad: {
    flex: 1,
    display: "flex",
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 10
  }
});
