import * as React from 'react';
import Homepage from "./components/Homepage";
import ActivityMonitor from "./components/ActivityMonitor";
import CustomPlan from "./components/CustomPlan";
import FriendsPage from "./components/FriendsPage";
import Profile from "./components/Profile";
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
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
                    name='Plan' 
                    component={CustomPlan}
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