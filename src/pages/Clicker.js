import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Keyboard, TextInput, Platform, Pressable, TouchableOpacity } from "react-native";

let countdown = 3;
let gameCountdown = 5;
const Clicker = () => {
    const [count, setCount] = useState(0)
    const [highscore, setHighscore] = useState(0)
    const [active, setActive] = useState(false)
    const [countdown1, setCountdown] = useState(3)
    const [disabled, setDisabled] = useState(true)
    ///ADD COUNTDOwN TIMER 3, 2, 1
    ///Add game timer 10 seconds to click as many times as possible, if on computer, you can use the space bar 
    ///save high score to MMKV
    
    function startCountdown() {
        setCount(0)
        let timerId = setInterval(() => {
            countdown--
            setCountdown(countdown)
            if (countdown === 0) {
                setCountdown("START")
                clearInterval(timerId)
                countdown = 3
                setDisabled(false)
                startGameCountdown()
            }
        }, 1000);
    }

    function startGameCountdown(e) {
        if (Platform.OS === "web") {
            console.log("HELLO")
        }
        let gameTimerId = setInterval(() => {
            gameCountdown--
            setCountdown(countdown)
            if (gameCountdown === 0) {
                //GAME END 
                clearInterval(gameTimerId)
                //SAVE HIGHSCORE HERE
                //RESET GAME
                gameCountdown = 5
                setActive(false)
                setDisabled(true)
            }
        }, 1000);
    }

    useEffect(()=> {
        if (count > highscore) {
            setHighscore(count)
        }
    }, [count])

    const handleOnClick = () => {
        setActive(true)
        startCountdown()
    }

    const handleClicker = () => {
        setCount(count+1)
    }

    const isActive = () => {
        return (
            <>
                <Text>{countdown1}</Text>
                {Platform.OS === "android" ? 
                <>
                    <Text>GOOBYE </Text>
                    <TouchableOpacity style={{height: 200, width: 200, backgroundColor: "blue", justifyContent: "center", alignItems: "center"}} onPress={handleClicker} disabled={disabled}>
                    <Text style={{ color: "white", }}>
                            CLICK ME
                        </Text>
                    </TouchableOpacity>
                </>
                 : <></>}
                {Platform.OS === "ios" ? 
                <>
                    <Text>GOOBYE </Text>
                    <TouchableOpacity style={{height: 200, width: 200, backgroundColor: "blue", justifyContent: "center", alignItems: "center"}} onPress={handleClicker} disabled={disabled}>
                        <Text style={{ color: "white", }}>
                            CLICK ME
                        </Text>
                    </TouchableOpacity>
                </>
                 : <></>}
                {Platform.OS === "web" ?  
                <>
                    <Text>WEB VERSION</Text>
                    <input type={"button"} value={"CLICK ME"} autoFocus onClick={handleClicker}/> 
                </>
                : <></>}
            </>
        )
    }
    
    const isNotActive = () => {
        return (
            <>
                <Button title="Start" onPress={handleOnClick}/>
            </>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Text>Clicker Game</Text>
                {highscore ? <Text>High Score: {highscore}</Text> : <></>}
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