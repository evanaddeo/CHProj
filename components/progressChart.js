import React from "react"
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function ProgressChart() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Progress</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: "flex",
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:20
    },
});