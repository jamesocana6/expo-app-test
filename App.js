import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createContext, useEffect, useState } from 'react';
import Clicker from './src/pages/Clicker';
import Main from './src/pages/Main';
import Test from './src/pages/Test';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();
export const TestContext = createContext("Testing")

export default function App() {
  // localStorage.removeItem("SignedIn")
  console.log("APP PAGE WAHOO")
  const [ session, setSession ] = useState(null)
  if (Platform.OS === "android" || Platform.OS === "ios") {
    getValueFor("SignedIn")
    async function getValueFor(key) {
      let result = await SecureStore.getItemAsync(key);
      if (result) {
        setSession(JSON.parse(result))
        console.log("nice we got it", result)
        console.log("nice we got it", JSON.parse(result))
      } else {
        console.log("drats")
      }
    }
  } else if (Platform.OS === "web") {
    //console.log("APP PAGE")
    const getSession = () => {
      let result = localStorage.getItem("SignedIn")
      if (result) {
        setSession(JSON.parse(result))
        //console.log("nice we got it", result)
        console.log("nice we got it", JSON.parse(result))
      } else {
        console.log("drats")
      }
    }
    useEffect(() => {getSession()}, [])
  }
  return (
    <NavigationContainer>
      <TestContext.Provider value={session}>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{title: 'Main', headerShown: false,}}
          />
          <Stack.Screen 
            name="Test" 
            component={Test} 
          />
          <Stack.Screen 
            name="Clicker" 
            component={Clicker} 
          />
        </Stack.Navigator>
      </TestContext.Provider>
    </NavigationContainer>
  );
}
