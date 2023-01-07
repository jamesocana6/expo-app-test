import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';


export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.bigText}>Big Text</Text>
      <Text>Just Text</Text>

      {/* <h1>Just h1</h1> */}
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
  bigText: {
    fontSize: 100,
  }
});
