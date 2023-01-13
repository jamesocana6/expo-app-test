import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

const Output = ({equation}) => {
    return (
        <View style={styles.output}>
            <Text style={{fontSize: 30,}}>{equation}</Text>
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
    output: {
        textAlign: "right",
        backgroundColor: "#999999",
        padding: 5,
        borderRadius: 5,
    },
  });

export default Output;