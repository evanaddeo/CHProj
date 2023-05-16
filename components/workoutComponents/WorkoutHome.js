import React from "react"
import { View, Text, StyleSheet, Button } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const WorkoutHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['black', 'rgb(89, 97, 249)', 'rgb(7, 13, 117)']}
                style={styles.grad}
                start={{ x: 0.9, y: 0 }}
            >
                <View>
                    <View>
                        <Text>Discover new workouts</Text>
                    </View>
                    <View>
                        <Text>Create custom workout</Text>
                    </View>
                    <View>
                        <Text>View Activity</Text>
                    </View>
                </View>
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

export default WorkoutHome;