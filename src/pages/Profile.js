import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Profile = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Profile Page</Text>
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

export default Profile;