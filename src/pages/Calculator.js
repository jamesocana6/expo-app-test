import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberSquares from "../components/NumberSquares"
import Operations from "../components/Operations";
import Output from "../components/Output";

const Calculator = () => {
    return (
        <View style={styles.container}>
            <Text>Calculator!</Text>
            <View style={[styles.calculator]}>
                <View style={[styles.numAndOutput]}>
                    <Output/>
                    <NumberSquares/>
                </View>
                <View style={[styles.operations]}>
                    <Operations/>
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
        flexDirection: "row",
    },
    numAndOutput: {
        flexDirection: "column",
    },
    operations: {
        flexDirection: "column",
    },
});


export default Calculator;