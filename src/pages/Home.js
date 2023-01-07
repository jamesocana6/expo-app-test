import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";

const Home = ({navigation}) => {
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