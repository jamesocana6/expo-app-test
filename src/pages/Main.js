import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: 'Waffle',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                      )
                  }}
                />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Leaderboard" component={Leaderboard} />
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