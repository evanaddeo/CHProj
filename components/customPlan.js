import React from "react"
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function CustomPlan() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Your Plan</Text>
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