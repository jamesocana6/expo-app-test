import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

const NumberSquares = () => {

    let numbers = ["1", '2', '3', '4', '5', '6', '7', '8', '9',]
    numbers = numbers.map((number) => {
        return (
            <TouchableOpacity>
                <View style={styles.numberButton}>
                    <Text>{number}</Text>
                </View>
            </TouchableOpacity>
        )
    })
    
    return (
        <View style={[styles.numberContainer, styles.numberArea]}>
            {numbers}
            <View style={{flexDirection: "row",}}>
                <View style={[styles.numberButton, {flex: 3, width: 115,},]}>
                    <Text>0</Text>
                </View>
                <View style={[styles.numberButton, {flex: 1}]}>
                    <Text>.</Text>
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
        height: 200,
        width: 200,
        flexDirection: "row",
        flexWrap: "wrap",
    }
});


export default NumberSquares;