import { getAnalytics } from "firebase/analytics";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";

const Home = ({navigation}) => {
    
    /////////////
    /////////////
    // NEED TO BE SIGNED IN TO POST A HIGH SCORE
    // LINK accounts by email for database
    // Verify email to prevent spam accounts
    // BACKEND WILL BE AWS DynamoDB or GOOGLE for the DB. Then create a Node.js and express.js to handle updating scores to the DB. 
    // Auth will be something that works for web, ios, and android and the user data will be stored on the DB with highscores and maybe themes.
    // Check DynamoDB, MMKV db, firestore,
    // backend cloudcomputing check AWS Lambda, google Cloud functions
    
    // Ads will be google ads? 
    // Local database highscores? Jeff has the highscore in the grade class 302.
    // firebase analytics 
    // mobile version is to play offline! otherwise you can play on web.
    // frontend will make calls to backend.

    //Search database for user using verified email
    //not signed in users will not have highscores saved in the cloud, only locally.
    //on new highscore, you are prompted to share the score or post it by signing in
    //mobile users use google play or apple store or verified email or facebook (??)
    //web users use google acc, apple acc, verified email or facebook??

    //USER MODEL IN DYNAMODB
    //username:
    //email:
    //sign in method: (email, OAuth Google, Google Play, Apple Login)
    //Highscores: (top 5 scores in each category)
    //settings preferences:
    //Theme preferences:



    
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