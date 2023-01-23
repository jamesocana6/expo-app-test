import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Hello from "./Hello";
import * as Progress from 'react-native-progress';

let x = 0;

const Timer = () => {
    const [progress, setProgress] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);
    const [isActive, setActive] = useState(false)
    const [disabled, setDisabled] = useState(false)

    function add() {
        x++;
        setProgress((progress) => progress+0.1)
        console.log(progress)
        console.log(x)
        if (x >= 10) {
            setActive(false);
            setDisabled(false);
            setModalVisible(true)
            x = 0;
        }
    }

    // const clickButton = () => {
    //     setProgress(progress+0.1)
    //     console.log(progress)
    // }

    useEffect(something, [isActive])
    //useEffect(clickButton, [x])

    function something() {
        let intervalId;
        isActive ? intervalId = setInterval(add, 1000) : clearInterval(intervalId)
        //NOT SURE WHY, but code doesnt work without this.
        return () => clearInterval(intervalId)
    }

    const startTimer = () => {
        setActive(true);
        setDisabled(true);
        something();
    }

    const stopTimer = () => {
        setActive(false)
        setDisabled(false)
    }

    return (
        <View>
            <Button title="Start" disabled={disabled} onPress={startTimer} />
            <Button title="Stop" onPress={stopTimer} />
            <Hello modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <Progress.Bar 
                progress={progress} 
                width={200} 
                borderWidth={0}
                animated={true}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 14,
        color: "black",
        height: 40,
        paddingHorizontal: 10,
        maxWidth: 40,
        width: 40,
    },
    timer: {
        height: 10,
        width: 100,
        backgroundColor: "red",
    }
});

export default Timer;