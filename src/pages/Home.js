import { getAnalytics } from "firebase/analytics";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";

const Home = ({navigation}) => {

    /////////////
    /////////////
    // BACKEND WILL BE AWS DynamoDB or GOOGLE for the DB. Then create a Node.js and express.js to handle updating scores to the DB. 
    // Auth will be something that works for web, ios, and android and the user data will be stored on the DB with highscores and maybe themes.
    // Check DynamoDB, MMKR db, firestore,
    // backend cloudcomputing check AWS Lambda, google Cloud functions
    
    // Ads will be google ads? 
    // firebase analytics 
    // mobile version is to play offline! otherwise you can play on web.
    // frontend will make calls to backend.

    const [nums, setNums] = useState()
    const randNumbers = () => {
        let randNums = [];
        for (let i = 0; i < 6; i++) {
            randNums.push(Math.floor(Math.random() * 9 + 1));
        }
        setNums(randNums);
    }
    useEffect(() => { randNumbers() }, [])
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                    <Text>To Test Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Clicker')}>
                    <Text>To Clicker Game</Text>
                </TouchableOpacity>
                <Text>Home Page</Text>
            </View>
            <View style={styles.container}>
                <Text>{nums}</Text>
                <Button title="Click for random" onPress={randNumbers} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;