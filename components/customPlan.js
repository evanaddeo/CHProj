import React from "react"
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function CustomPlan() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['black', 'rgb(89, 97, 249)', 'rgb(7, 13, 117)']}
                style={styles.grad}
                start={{ x: 0.9, y: 0 }}
            >
                <Text style={styles.text}>Your plan</Text>
            </LinearGradient>
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
    grad: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
    }
});