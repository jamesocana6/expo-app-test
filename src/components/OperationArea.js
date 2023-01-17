import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Operations from "./Operations";

const OperationArea = ({equation, setEquation, solve}) => {

    let operations = ["/", '*', '-', '+',]


    operations = operations.map((operation) => {
        return (
            <Operations key={"op" + operation} equation={equation} setEquation={setEquation} operation={operation} />
        )
    })

    return (
        <>
            <View style={styles.operationArea}>
                {operations}
            </View>
            <TouchableOpacity onPress={solve}>
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

export default OperationArea;