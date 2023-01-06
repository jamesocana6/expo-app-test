import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text><h1>h1 in Text</h1></Text>
      <Text>Just Text</Text>
      <h1>Just h1</h1>
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />
      <StatusBar style="auto" />
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
