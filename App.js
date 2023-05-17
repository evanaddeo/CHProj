import * as React from 'react';
import Homepage from "./components/Homepage";
import ActivityMonitor from "./components/ActivityMonitor";
import Workout from "./components/Workout";
import FriendsPage from "./components/FriendsPage";
import Profile from "./components/Profile";
import Login from './components/Login';
import Signup from './components/Signup';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Main() {
    return (
        <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: 'rgb(91, 97, 217)',
              tabBarInactiveTintColor: 'white',
              tabBarStyle: {backgroundColor: "rgb(17, 19, 66)", borderTopWidth: 0}
            }}>
                <Tab.Screen 
                    name='Home' 
                    component={Homepage}
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Workout' 
                    component={Workout}
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="dumbbell" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Activity'
                    component={ActivityMonitor} 
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="chart-bar" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Social'
                    component={FriendsPage} 
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="users" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Profile'
                    component={Profile} 
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="cogs" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Signup"
                    component={ Signup }
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={ Login }
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Main"
                    component={ Main }
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:20,
    },
});


export default App;