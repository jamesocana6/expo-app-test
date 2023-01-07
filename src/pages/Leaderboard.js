import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Leaderboard = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Leaderboard Page</Text>
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
  });

export default Leaderboard;