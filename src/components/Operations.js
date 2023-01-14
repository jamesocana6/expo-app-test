import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Operations = ({equation, setEquation}) => {

    let operations = ["/", '*', '-', '+',]

    const handleOnClick = (event) => {
        if (event.target.textContent == "-" && equation.length === 0) {
            setEquation(event.target.textContent);
        } else if (equation.length > 0) {
            setEquation([...equation, event.target.textContent])
        }
    }

    operations = operations.map((operation) => {
        return (
            <TouchableOpacity onPress={handleOnClick}>
                <View style={styles.operationButton}>
                    <Text>{operation}</Text>
                </View>
            </TouchableOpacity>
        )
    })

    return (
        <>
            <View style={styles.operationArea}>
                {operations}
            </View>
            <TouchableOpacity>
                <View style={styles.operationButton}>
                    <Text>=</Text>
                </View>
            </TouchableOpacity>
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
    operationButton: {
        width: 55,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dddddd",
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    operationArea: {
        width: 70,
        flexDirection: "column",
    },
  });

export default Operations;