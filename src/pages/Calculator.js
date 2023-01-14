import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import NumberSquares from "../components/NumberSquares"
import Operations from "../components/Operations";
import Output from "../components/Output";

const Calculator = () => {

    const [equation, setEquation] = useState([0])

    const handleClear = () => {
        setEquation([])
    }

    return (
        <View style={styles.container}>
            <Text>Calculator!</Text>
            <View style={[styles.calculator]}>
                <Output equation={equation}/>
                <View style={[styles.numAndOutput]}>
                    <NumberSquares equation={equation} setEquation={setEquation}/>
                    <View style={[styles.operations]}>
                        <Operations equation={equation} setEquation={setEquation}/>
                    </View>
                </View>
                <View>
                    <Button title={"Clear"}  onPress={handleClear}/>
                </View>
            </View>
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
    calculator: {
        flexDirection: "column",
    },
    numAndOutput: {
        flexDirection: "row",
    },
    operations: {
        flexDirection: "column",
    },
});


export default Calculator;