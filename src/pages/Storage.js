import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  console.log(result)
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}

function getUseContext() {
    console.log(useContext("test"))
}

export default function Storage() {
    console.log(SecureStore)
  const [key, onChangeKey] = useState('Your key here');
  const [value, onChangeValue] = useState('Your value here');

  return (
    <View style={styles.container}>
        <Button title='GET USE CONTEXT' onPress={getUseContext}/>
      <Text>Save an item, and grab it later!</Text>
      <Button
        title="Save this key/value pair"
        onPress={() => {
          save("Apple", "Water");
          onChangeKey('Your key here');
          onChangeValue('Your value here');
        }}
      />

      <Text style={styles.container}>🔐 Enter your key 🔐</Text>
      <TextInput
        onSubmitEditing={event => {
          getValueFor(event.nativeEvent.text);
        }}
        placeholder="Enter the key for the value you want to get"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });