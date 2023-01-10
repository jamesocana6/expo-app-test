import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen 
                name="Leaderboard" 
                component={Leaderboard} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="leaderboard" color={color} size={size} />
                        )
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main;