import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NumberSquares = ({ value, equation, setEquation }) => {
    const handleOnClick = () => {
        if (equation == 0) {
            setEquation([value])
        } else {
            setEquation([...equation, value])
        }
    }

    return (
        <TouchableOpacity onPress={handleOnClick}>
            <View style={styles.numberButton}>
                <Text>{value}</Text>
            </View>
        </TouchableOpacity>
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


export default NumberSquares;