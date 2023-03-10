import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import Hello from "../components/Hello";
import SignIn from "../components/SignIn";

const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>

            <View style={styles.container}>
                <Text>Profile Page</Text>
                <SignIn/>
                <Hello modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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