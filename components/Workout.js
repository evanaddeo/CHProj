import React from "react"
import { View, Text, StyleSheet, Button } from 'react-native';
import WorkoutHome from "./workoutComponents/WorkoutHome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CustomPlan = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WorkoutHome" component={WorkoutHome} />
        </Stack.Navigator> 
    );
}

export default CustomPlan;