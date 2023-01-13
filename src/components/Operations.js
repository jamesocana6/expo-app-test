import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Operations = () => {

    let operations = ["/", '*', '-', '+', '=',]
    operations = operations.map((operation) => {
        return (
            <TouchableOpacity>
                <View style={styles.operationButton}>
                    <Text>{operation}</Text>
                </View>
            </TouchableOpacity>
        )
    })

    return (
        <View style={styles.operationArea}>
            {operations}
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