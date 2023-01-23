import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

let coundownTimer = 3;

const Clicker = () => {
    const [count, setCount] = useState(0)
    const [active, setActive] = useState(false)
    //const [startCountdown, setStartCountdown] = useState(false)
    const [countdown, setCountdown] = useState(3)
    ///ADD COUNTDOwN TIMER 3, 2, 1
    ///Add game timer 10 seconds to click as many times as possible, if on computer, you can use the space bar 
    ///save high score to MMKV
    
    function startCountdown() {
        let timerId = setInterval(() => {
            coundownTimer--
            console.log(coundownTimer)
            if (coundownTimer === 0) {
                clearInterval(timerId)
            }
        }, 1000);
    }
        
    const handleOnClick = () => {
        setActive(true)
        startCountdown()
    }

    const handleClicker = () => {
        setCount(count+1)
    }

    const isActive = () => {
        return (
            <Button title="CLICK ME" onPress={handleClicker}/>
        )
    }
    
    const isNotActive = () => {
        return (
            <Button title="Start" onPress={handleOnClick}/>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Text>Clicker Game</Text>
                <Text>Score: {count}</Text>
                {active ? isActive() : isNotActive()}
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

export default Clicker;