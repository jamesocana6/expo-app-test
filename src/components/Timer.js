import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

let x = 0;

const Timer = () => {
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [mil, setMil] = useState(0)
    const [time, setTime] = useState(0);
    const [isActive, setActive] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const transformMinutes=()=>{
        const convertedValue= (time / 60000);
        const formattedValue=(convertedValue)
        return formattedValue
    }
    const transformSeconds=()=>{
        const convertedValue= (time / 1000);
        const formattedValue=(convertedValue)
        return formattedValue
    }
    const transformMilliseconds=()=>{
        const convertedValue= (time / 10);
        const formattedValue=(convertedValue)
        return formattedValue
    }
    
    const handleTimeChange = () => {
        setTime(min*60000 + sec*1000 + mil*10);
    }

    function add() {
        x++;
        console.log(x)
        if (x >= 10) {
            setActive(false);
            setDisabled(false);
            x=0;
        }
    }
    
    useEffect(something, [isActive])

    function something() {
        let intervalId;
        isActive ? intervalId = setInterval(add, 1000) : clearInterval(intervalId)
        //NOT SURE WHY, but code doesnt work without this.
        return () => clearInterval(intervalId)
    }

    const startTimer = (event) => {
        setActive(true);
        setDisabled(true);
        something();
    }
    
    const stopTimer = () => {
        setActive(false)
        setDisabled(false)
    }

    return(
        <View>
            <Text>
                <TextInput style={styles.input} onSubmitEditing={handleTimeChange} onChangeText={setMin} keyboardType={"numeric"} value={min}/>
                :<TextInput style={styles.input} onSubmitEditing={handleTimeChange} onChangeText={setSec} keyboardType={"numeric"} value={sec}/>
                :<TextInput style={styles.input} onSubmitEditing={handleTimeChange} onChangeText={setMil} keyboardType={"numeric"} value={mil}/>
            </Text>
            <Button title="Start" disabled={disabled} onPress={startTimer}/>
            <Button title="Stop" onPress={stopTimer}/>
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
    }
  });

export default Timer;