import React, { useState } from "react";
import { View, Modal, Text, Pressable, StyleSheet } from "react-native";

const Hello = ({modalVisible, setModalVisible}) => {
    //const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View
                    style={styles.centeredView}>
                    <View
                        style={styles.modalView}>
                        <Text>Woohoo!</Text>
                        <Pressable
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text>Show Modal</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
});


export default Hello;