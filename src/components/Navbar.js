import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

const Navbar = () => {
    return (
        <View>
            <Text style={styles.bigText}>Navbar Component</Text>
            <TouchableHighlight>
              <Text>Test Page</Text>
            </TouchableHighlight>
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
      backgroundColor: "grey",
      paddingVertical: 10 + "px",
      paddingHorizontal: 10 + "px",
    }
  });

export default Navbar;