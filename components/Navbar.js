import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Navbar = () => {
    return (
        <View>
            <Text style={styles.bigText}>Navbar Component</Text>
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
    bigText: {
      fontSize: 100,
    }
  });

export default Navbar;