import React from "react"
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function ActivityMonitor() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Activity</Text>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize:20
    }
});