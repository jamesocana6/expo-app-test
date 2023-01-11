import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Timer from "../components/Timer";

const Test = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Timer to Modal</Text>
                <Timer/>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 100,
    }
  });

export default Test;