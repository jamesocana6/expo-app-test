import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Main = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                    <Text>To Test Page</Text>
                </TouchableOpacity>
                <Text>Main Page</Text>

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

export default Main;