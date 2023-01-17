import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NumberSquares from "./NumberSquares";

const NumberArea = ({equation, setEquation}) => {
    const handleOnClickZero = () => {
        if (equation != 0 || equation.length === 0) {
            setEquation([...equation, 0])
        }
    }
    const handleOnClickDecimal = () => {
        if (!equation.includes(".")) {
            setEquation([...equation, "."])
        }
    }

    let numbers = ["1", '2', '3', '4', '5', '6', '7', '8', '9',]
    numbers = numbers.map((number) => {
        return (
            <NumberSquares key={"key"+number} value={number} equation={equation} setEquation={setEquation}/>
        )
    })
    
    return (
        <View style={[styles.numberContainer, styles.numberArea]}>
            {numbers}
            <View style={{flexDirection: "row",}}>
                <TouchableOpacity onPress={handleOnClickZero}>
                    <View style={[styles.numberButton, {width: 115,},]}>
                        <Text>0</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnClickDecimal}>
                    <View style={[styles.numberButton,]}>
                        <Text>.</Text>
                    </View>
                </TouchableOpacity>
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
    numberContainer: {
        maxHeight: 500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberButton: {
        width: 55,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dddddd",
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    numberArea: {
        height: 235,
        width: 200,
        flexDirection: "row",
        flexWrap: "wrap",
    }
});


export default NumberArea;